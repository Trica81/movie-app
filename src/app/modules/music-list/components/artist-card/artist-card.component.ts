import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.sass']
})
export class ArtistCardComponent implements OnInit {

  @Input() artistName: string;
  @Input() img: string;
  @Input() tags: any[];
  @Input() bio: string;
  @Input() id: string;
  @Input() isLiked: boolean;
  @Output() sendArtistId = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  likeMe() {
    this.sendArtistId.emit(this.id);
  }

}
