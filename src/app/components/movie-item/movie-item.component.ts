import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.sass']
})
export class MovieItemComponent implements OnInit {

  @Input() public title: String;
  @Input() public id: Number;
  @Input() public description: String;
  @Input() public actors: String[];
  @Input() public director: String;
  @Input() public rating: String;
  @Input() public imageSource: String;

  @Output() movieDetail = new EventEmitter();

  constructor( ) { }

  detailMovie() {
    this.movieDetail.emit(this.id);
  }

  ngOnInit() {
  }

}
