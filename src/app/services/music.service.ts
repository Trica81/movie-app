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
  private _song: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private _msg: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  musicItems$ = this._mucicItems.asObservable();
  artistData$ = this._artist.asObservable();
  songData$ = this._song.asObservable();
  msg$ = this._msg.asObservable();

  private countryApiCall = [];
  private artistApiCall = [];
  private songApiCall = [];

  private _infoMsg: any;


  count = true;
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
    const f = this.artistApiCall.find(item => item.id === id);
    if ( f ) {
      this._artist.next(f.value);
    } else {
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


  getSong(id: string) {
    const f = this.songApiCall.find(item => item.id === id);
    if ( f ) {
      this._artist.next(f.value);
    } else {
      this._http.get<any>(`${this.BASE_URL}?method=track.getinfo&mbid=${id}&api_key=7aca6ef86ceb095034f88fa36aa6e3f9&format=json`)
        .pipe(
          map( item => {
            if (item.error) {
              this._infoMsg = {
                message: item.message,
                msgClass: 'alert-warning'
              };

              this._msg.next(this._infoMsg);
            } else {
              const song = {
                src: item.track.album.image[3]['#text'] || 'https://www.freeiconspng.com/uploads/music-red-symbol-free-icon-27.png',
                tags: item.track.toptags.tag || [],
                songName: item.track.name || null,
                songArtist: item.track.album.artist || null,
                songAlbum: item.track.album.title,
                publishDate: item.track.wiki.published || null,
                link: item.track.url || null,
                wiki: item.track.wiki.summary || null,
                mbid: item.track.mbid
              };
              return song;
            }
          })
        ).subscribe(item => {
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

  msgInfo (msg) {
    this._infoMsg = {
      message: msg,
      msgClass: 'alert-warning'
    };
    this._msg.next(this._infoMsg);
  }

  musicExiste(id: string) {
    return this.getMusic(id);
  }

  goToArtist(id: string) {
    this.router.navigate(['artists/' + id]);
  }
  goToSong( id: string) {
    this.router.navigate(['song/' + id]);
  }

}
