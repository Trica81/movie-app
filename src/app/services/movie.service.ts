import { Injectable } from '@angular/core';
import { Movie } from '../classes/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    new Movie({
      id: 1,
      title: 'How to Train Your Dragon: The Hidden World',
      // tslint:disable-next-line:max-line-length
      description: `When Hiccup discovers Toothless isn't the only Night Fury, he must seek "The Hidden World", a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.`,
      year: '2019',
      imageSource: 'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      actors: ['Jay Baruchel', 'America Ferrera', 'F. Murray Abraham '],
      director: 'Dean DeBlois',
      rating: 7.9
    }),
    new Movie({
      id: 2,
      title: 'Alita: Battle Angel',
      // tslint:disable-next-line:max-line-length
      description: `A deactivated female cyborg is revived, but cannot remember anything of her past life and goes on a quest to find out who she is.`,
      year: '2019',
      // tslint:disable-next-line:max-line-length
      imageSource: 'https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
      actors: [' Rosa Salazar', 'Christoph Waltz', 'Jennifer Connelly'],
      director: 'Robert Rodriguez',
      rating: 7.9
    }),
    new Movie({
        id: 3,
        title: 'The Lego Movie 2: The Second Part',
        // tslint:disable-next-line:max-line-length
        description: `It's been five years since everything was awesome and the citizens are facing a huge new threat: Lego Duplo invaders from outer space, wrecking everything faster than they can rebuild.`,
        year: '2019',
        imageSource: 'https://m.media-amazon.com/images/M/MV5BMTkyOTkwNDc1N15BMl5BanBnXkFtZTgwNzkyMzk3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        actors: [ 'Chris Pratt', 'Elizabeth Banks', 'Will Arnett'],
        director: 'Mike Mitchell',
        rating: 7.9
      }),
    new Movie({
      id: 4,
      title: 'Fighting with My Family',
      // tslint:disable-next-line:max-line-length
      description: `A former wrestler and his family make a living performing at small venues around the country while his kids dream of joining World Wrestling Entertainment.`,
      year: '2019',
      imageSource: 'https://m.media-amazon.com/images/M/MV5BMjQ3MTk4Nzc1M15BMl5BanBnXkFtZTgwMTEwMDU5NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      actors: [ 'Dwayne Johnson', 'Lena Headey', 'Vince Vaughn'],
      director: 'Stephen Merchant',
      rating: 7.9
    }),
    new Movie({
      id: 5,
      title: 'Cold Pursuit',
      // tslint:disable-next-line:max-line-length
      description: `A snowplow driver seeks revenge against the drug dealers he thinks killed his son. Based on the 2014 Norwegian film 'In Order of Disappearance'.`,
      year: '2019',
      // tslint:disable-next-line:max-line-length
      imageSource: 'https://m.media-amazon.com/images/M/MV5BM2YyYWI3NjItMWEwZS00MzhkLWJmZTMtZDAzYjRhODM0OTMzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      actors: [ 'Liam Neeson', 'Laura Dern', 'Micheál Richardson' ],
      director: 'Hans Petter Moland',
      rating: 7.9
    })
  ];

  getActors(id) {
    const f = this.movies.find(movie => movie.getId() === id);
    if (f) {
      f.logActors();
    }

    let actors = [];
    this.movies.forEach(movie => {
      actors = actors.concat(movie.getActors());
    });
    actors = Array.from(new Set(actors));
    console.log(actors);
  }

  constructor() { }
}
