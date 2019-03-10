import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Music } from 'src/app/classes/music';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.sass']
})
export class MusicListComponent implements OnInit, OnDestroy {

  subscribe: Subscription;
  musicItems: Music[];
  term = '';
  searchProperty = 'name';


  constructor( private musicService: MusicService ) { }

  getArtist(id: string) {
    if (id === '') {
      this.musicService.msgInfo(`There is no data available for this artist.`);
    } else {
    this.musicService.goToArtist(id);
    }
  }

  getSong(id: string) {
    if (id === '') {
      this.musicService.msgInfo(`There is no data available for this song.`);
    } else {
      this.musicService.goToSong(id);
    }
  }

  searchMusic (term: string) {
    this.musicService.loadTracks(term);
  }

  ngOnInit() {

    this.musicService.loadTracks('serbia');
    this.subscribe = this.musicService.musicItems$.subscribe( (item) => {
      this.musicItems = item;
    });
  }


  ngOnDestroy () {
    this.subscribe.unsubscribe();
   }


}
