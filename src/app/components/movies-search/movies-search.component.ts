import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.sass']
})
export class MoviesSearchComponent implements OnInit {


  @Output() forSearch = new EventEmitter();

  constructor() { }

  inputSearch(event: any) {
    this.forSearch.emit(event.target.value);
  }

  ngOnInit() {
  }

}
