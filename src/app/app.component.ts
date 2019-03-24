import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { MusicService } from './services/music.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'ng-movie-star';
  countryTitle = '';
  subscribe: Subscription;

  constructor ( private musicService: MusicService) {}

  ngOnInit () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDI-hPYzyxwY3KVckrAr44RhyrGMRDn42c',
      authDomain: 'music-e1811.firebaseapp.com'
    });

    this.subscribe = this.musicService.country$.subscribe(title => {
      this.countryTitle = title;
    });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
