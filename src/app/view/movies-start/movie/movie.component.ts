import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  @Input() public movie;
  actors: String = '';
  constructor() { }

  ngOnInit() {

    if ( this.movie.actors.length > 0) {
      for (let i = 0; i < this.movie.actors.length; i++) {
        this.actors += this.movie.actors[i];
        if (i < this.movie.actors.length - 1) {
          this.actors += ', ';
        }
      }
    }
  }

}
