import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'ng-movie-star';

  constructor () {}

  ngOnInit () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDI-hPYzyxwY3KVckrAr44RhyrGMRDn42c',
      authDomain: 'music-e1811.firebaseapp.com'
    });
  }
}
