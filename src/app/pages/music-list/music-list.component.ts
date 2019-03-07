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

  musicItems$: Subscription;
  musicItems: Music[];
  term = '';
  searchProperty = 'name';
  subject;
  constructor( private musicService: MusicService ) { }

  getArtist(id: string) {
    console.log(id);
    this.musicService.goToArtist(id);
  }

  searchMusic (term: string) {
    this.musicService.loadTracks(term);
  }

  ngOnInit() {

    this.musicService.loadTracks('serbia');
    this.musicItems$ = this.musicService.musicItems.subscribe(item => {
      this.musicItems = item;
    });
  }


  ngOnDestroy () {
    this.musicItems$.unsubscribe();
   }


}
