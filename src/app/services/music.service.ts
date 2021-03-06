import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Music } from '../classes/music';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { LogInService } from './log-in.service';
import { Artist } from '../classes/artist';
import { Song } from '../classes/song';
import { InfoMessage } from '../classes/info-message';

@Injectable({
  providedIn: 'root'
})


export class MusicService {

  constructor( private router: Router, private _http: HttpClient, private logInService: LogInService ) { }

  private BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

  private _mucicItems: BehaviorSubject<Music[]> = new BehaviorSubject<Music[]>([]);
  private _artist: BehaviorSubject<Artist> = new BehaviorSubject<Artist>(null);
  private _song: BehaviorSubject<Song> = new BehaviorSubject<Song>(null);
  private _msg: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private _country: BehaviorSubject<string> = new BehaviorSubject<string>('');

  musicItems$ = this._mucicItems.asObservable();
  artistData$ = this._artist.asObservable();
  songData$ = this._song.asObservable();
  msg$ = this._msg.asObservable();
  country$ = this._country.asObservable();

  private countryApiCall = [];
  private artistApiCall = [];
  private songApiCall = [];

  private _infoMsg: any;

  loadTracks (country) {
    const f = this.countryApiCall.find(item => item.country === country);
    this._country.next(country);
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
                return new Music({
                  attr: track['@attr'],
                  artist: track.artist,
                  duration: track.duration,
                  image: track.image[3]['#text'],
                  listeners: track.listeners,
                  mbid: track.mbid,
                  name: track.name,
                  streamable: track.streamable,
                  url: track.url
                });
              });
              return tracks;
            }
          })
        ).subscribe((data: Music[]) => {
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
    const f = this.artistApiCall.find(item => item.id === id);
    if ( f ) {

      this._artist.next(f.value);
    } else {
      this._http.get<any>(`${this.BASE_URL}?method=artist.getinfo&mbid=${id}&api_key=7aca6ef86ceb095034f88fa36aa6e3f9&format=json`)
      .pipe(
        map((item) => {
          return new Artist({
            name: item.artist.name,
            bio: item.artist.bio.content,
            img: item.artist.image[4]['#text'],
            tag: item.artist.tags.tag,
            url: item.artist.url,
            id: item.artist.mbid
          });
        })
      )
      .subscribe((item: Artist) => {
        if (item != null) {
          this.artistApiCall.push({
            id: id,
            value: item
          });
        } else {
          item = null;
        }
        this._artist.next(item);
      });
    }

  }


  loadSongInfo(id: string) {
    const f = this.songApiCall.find(item => item.id === id);
    if ( f ) {
      this._artist.next(f.value);
    } else {
      this._http.get<any>(`${this.BASE_URL}?method=track.getinfo&mbid=${id}&api_key=7aca6ef86ceb095034f88fa36aa6e3f9&format=json`)
        .pipe(
          map( item => {
            if (item.error) {

              this._msg.next(new InfoMessage({
                message: item.message,
                msgClass: 'alert-warning'
              }));
            } else {
              return new Song({
                src: item.track.album.image[3]['#text'] || 'https://www.freeiconspng.com/uploads/music-red-symbol-free-icon-27.png',
                tags: item.track.toptags.tag,
                songName: item.track.name,
                songArtist: item.track.album.artist,
                songAlbum: item.track.album.title,
                publishDate: item.track.wiki.published,
                link: item.track.url,
                wiki: item.track.wiki.summary,
                mbid: item.track.mbid
              });
            }
          })
        ).subscribe((item: Song) => {
          if (item != null) {
            this.songApiCall.push({
              id: id,
              value: item
            });
          } else {
            item = null;
          }
          this._song.next(item);
        });
      }
  }

  msgInfo (msg): void {
    this._msg.next(new InfoMessage({
      message: msg,
      msgClass: 'alert-warning'
    }));
  }

  userId(): string {
    return this.logInService.getUserId();
  }

}
