import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.sass']
})
export class TrackCardComponent implements OnInit {

  @Input() public artist: any;
  @Input() public duration: string;
  @Input() public image: string;
  @Input() public listeners: string;
  @Input() public name: string;
  @Input() public url: string;
  @Input() public mbid: string;


  @Output() musicArtist = new EventEmitter();
  @Output() musicSong = new EventEmitter();

  constructor( ) { }

  detailArtist() {
    this.musicArtist.emit(this.artist.mbid);
  }

  detailSong () {
    this.musicSong.emit(this.mbid);
  }

  ngOnInit() {
  }

}
