import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.sass']
})
export class MusicSearchComponent implements OnInit {


  @Output() forSearch = new EventEmitter();

  constructor() { }

  inputSearch(value: string) {
    this.forSearch.emit(value);
  }

  ngOnInit() {
  }

}
