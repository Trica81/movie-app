import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.sass']
})
export class SongCardComponent implements OnInit {

  @Input() srcImg: any;
  @Input() tags: string[];
  @Input() songName: string;
  @Input() songArtist: string;
  @Input() songAlbum: string;
  @Input() publishDate: string;
  @Input() link: string;
  @Input() mbid: string;
  @Input() wiki: string;
  @Input() isLiked: string;

  @Output() sendSongId = new EventEmitter();
  constructor( private musicService: MusicService) { }

  likeMe() {
    this.sendSongId.emit(this.mbid);
  }

  ngOnInit() {
  }

}
