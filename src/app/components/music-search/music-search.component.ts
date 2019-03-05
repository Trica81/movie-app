import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.sass']
})
export class MusicSearchComponent implements OnInit {


  @Output() forSearch = new EventEmitter();

  constructor() { }

  inputSearch(event: any) {
    this.forSearch.emit(event.target.value);
  }

  ngOnInit() {
  }

}
