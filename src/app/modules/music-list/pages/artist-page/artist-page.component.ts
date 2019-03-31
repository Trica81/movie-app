import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Artist } from 'src/app/classes/artist';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.sass']
})
export class ArtistPageComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  artistData: any;
  isLiked = false;


  constructor(
    private musicService: MusicService,
    private router: Router,
    private route: ActivatedRoute,
    private localService: LocalStorageService) { }

  onLikeArtist(id: string): void {
    const userId = this.musicService.userId();
    this.localService.likedItem('users', userId, id, 'artistLikes');
    this.isLiked = true;
  }

  ngOnInit() {
    const ArtistId = this.route.snapshot.params['id'];
    this.musicService.loadArtist(ArtistId);

    this.subscription = this.musicService.artistData$
      .subscribe((item: Artist) => {
        this.artistData = item;
        const userId = this.musicService.userId();
        this.isLiked = this.localService.isLiked('users', userId, ArtistId, 'artistLikes');
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
