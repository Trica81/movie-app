import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: Movie;
  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    const movie = this.movieService.getMovie(id);

    if (movie) {
      this.movieDetail = movie;
    } else {
      this.router.navigate(['error']);
    }
  }

}
