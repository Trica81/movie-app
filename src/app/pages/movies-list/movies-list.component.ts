import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/classes/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  constructor( private movieService: MovieService ) { }

  ngOnInit() {
    this.movies = this.movieService.movies;
  }

  logActorbyId(id) {
    this.movieService.getActors(id);
  }

}
