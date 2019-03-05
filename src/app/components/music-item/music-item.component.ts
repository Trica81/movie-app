import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.sass']
})
export class MusicItemComponent implements OnInit {

  @Input() public artist: string[];
  @Input() public duration: string;
  @Input() public image: string;
  @Input() public listeners: string;
  @Input() public name: string;
  @Input() public url: string;
  @Input() public mbid: string;
  property = '#text';
  imgUrl: string;


  @Output() musicDetail = new EventEmitter();

  constructor( ) { }

  detailMusic() {
    this.musicDetail.emit(this.mbid);
  }

  ngOnInit() {
    this.imgUrl = this.image[this.property];
  }

}
