import { Component, OnInit, Input } from '@angular/core';
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
  constructor( private musicService: MusicService) { }

  ngOnInit() {
  }

}
