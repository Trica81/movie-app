import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.sass']
})
export class ArtistPageComponent implements OnInit {
  artistData$ = this.musicService.artistData$;
  private artistData: any;


  constructor(private musicService: MusicService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['id'];
    this.musicService.loadArtist(name);
    this.musicService.artistData$.subscribe(item => {
      this.artistData = item;
    });
  }

}
