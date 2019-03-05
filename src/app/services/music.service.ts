import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Music } from '../classes/music';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor( private router: Router, private _http: HttpClient) { }
  private music: Music[] ;
  private helper = '@attr';
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

  getMusicData(country: string): Observable<any> {
    return this._http
      // tslint:disable-next-line:max-line-length
      .get<any>('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=' + country + '&api_key=7aca6ef86ceb095034f88fa36aa6e3f9&format=json')
      .pipe(
        map((item) => {
          const tracks = item.tracks.track.map((track) => {
            return {
              attr: track[this.helper],
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
        })
      );
  }

  musicExiste(id: string) {
    return this.getMusic(id);
  }

  goToMovieDetail(id: number) {
    this.router.navigate(['music/' + id]);
  }

}
