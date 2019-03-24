import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MusicService } from 'src/app/services/music.service';
import { Route, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.sass']
})
export class SongPageComponent implements OnInit, OnDestroy {

  song: any = null;
  isLiked = false;

  subscription: Subscription;
  constructor(private musicService: MusicService, private route: ActivatedRoute, private localService: LocalStorageService ) { }

  ngOnInit() {
    const songId = this.route.snapshot.params['id'];
    this.musicService.loadSongInfo(songId);
    this.subscription = this.musicService.songData$.subscribe((item) => {
      if ( item !== null ) {
        this.song = {
          srcImg: item.src,
          tags: item.tags,
          songName: item.songName,
          songArtist: item.songArtist,
          songAlbum: item.songAlbum,
          publishDate: item.publishDate,
          link: item.link,
          mbid: item.mbid,
          wiki: item.wiki
        };
        const userId = this.musicService.userId();
        this.isLiked = this.localService.isLiked('users', userId, songId, 'songsLikes');
      }
    });
  }

  onLikeSong(id: string) {
    const userId = this.musicService.userId();
    this.localService.likedItem('users', userId, id, 'songsLikes');
    this.isLiked = true;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
