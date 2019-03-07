import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.sass']
})
export class ArtistPageComponent implements OnInit, OnDestroy {
  artistData$: Subscription;
  artistData: any;


  constructor(private musicService: MusicService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['id'];
    this.musicService.loadArtist(name);
    this.artistData$ = this.musicService.artistData.subscribe(item => {
      this.artistData = item;
    });
  }

 ngOnDestroy () {
  this.artistData$.unsubscribe();
 }


}
