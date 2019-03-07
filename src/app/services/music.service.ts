import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Music } from '../classes/music';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class MusicService {

  constructor( private router: Router, private _http: HttpClient) { }

  private BASE_URL = 'http://ws.audioscrobbler.com/2.0/';
  private music: Music[] ;
  private _mucicItems: BehaviorSubject<Music[]> = new BehaviorSubject<Music[]>([]);
  private _artist: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  musicItems = this._mucicItems.asObservable();
  artistData = this._artist.asObservable();
  private countryApiCall = [];

  /**
   * @description Get full list of music
   */
  getMusicList() {
    return this.music;
  }

  /**
   * @description Get Movie based on Id
   * @param id Number
   */
  getMusic(id: string) {
    return true;
  }

  loadTracks (country) {
    const f = this.countryApiCall.find(item => item.country === country);
    if ( f ) {
      this._mucicItems.next(f.value);
    } else {
      // tslint:disable-next-line:max-line-length
      this._http.get<any>(`${this.BASE_URL}?method=geo.gettoptracks&country=${country}&api_key=7aca6ef86ceb095034f88fa36aa6e3f9&format=json`)
        .pipe(
          map((item) => {
            if (item.error) {
             return [];
            } else {
              const tracks = item.tracks.track.map((track) => {
                return {
                  attr: track['@attr'],
                  artist: track.artist,
                  duration: track.duration,
                  image: track.image,
                  listeners: track.listeners,
                  mbid: track.mbid,
                  name: track.name,
                  streamable: track.streamable,
                  url: track.url
                };
              });
              return tracks;
            }
          })
        ).subscribe(data => {
          if (data.length > 0) {
            this.countryApiCall.push({
              country: country,
              value: data
            });
          } else {
            data = [];
          }

          this._mucicItems.next(data);
        });
      }
  }

  loadArtist(id: string) {
    this._http.get<any>(`${this.BASE_URL}?method=artist.getinfo&mbid=${id}&api_key=7aca6ef86ceb095034f88fa36aa6e3f9&format=json`)
    .pipe(
      map(item => {
        const artist = {
          name: item.artist.name,
          bio: item.artist.bio.content,
          img: item.artist.image[4]['#text'],
          tag: item.artist.tags.tag,
          url: item.artist.url
        };
        return artist;
      })
    )
    .subscribe(item => {
      this._artist.next(item);
    });

  }

  musicExiste(id: string) {
    return this.getMusic(id);
  }

  goToArtist(id: string) {
    this.router.navigate(['artists/' + id]);
  }

}
