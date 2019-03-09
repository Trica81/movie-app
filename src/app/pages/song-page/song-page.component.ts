import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MusicService } from 'src/app/services/music.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.sass']
})
export class SongPageComponent implements OnInit, OnDestroy {

  song: any = null;

  subscription: Subscription;
  constructor(private musicService: MusicService, private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.musicService.getSong(id);
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
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
