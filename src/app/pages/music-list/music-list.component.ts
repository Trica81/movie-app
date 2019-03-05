import { Component, OnInit, Input } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Music } from 'src/app/classes/music';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.sass']
})
export class MusicListComponent implements OnInit {
  music: Music[];
  term = '';
  searchProperty = 'name';
  constructor( private musicService: MusicService ) { }

  getDetail(id: number) {
    this.musicService.goToMovieDetail(id);
  }

  searchMusic (term: any) {
    this.term = term;
  }

  ngOnInit() {
    this.music = this.musicService.getMusicList();
    this.musicService.getMusicData('serbia')
    .subscribe((item) => {
      console.log(item);
      this.music = item;
    });
  }


}
