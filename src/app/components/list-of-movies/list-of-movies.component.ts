import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.sass']
})
export class ListOfMoviesComponent implements OnInit {

  @Input() public title: String;
  @Input() public id: Number;
  @Input() public description: String;
  @Input() public actors: String[];
  @Input() public director: String;
  @Input() public rating: String;
  @Input() public imageSource: String;

  @Output() logActors = new EventEmitter();

  constructor( ) { }

  logActorsById() {
    this.logActors.emit(this.id);
  }

  ngOnInit() {
  }

}
