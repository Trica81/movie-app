import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { DetailGuard } from './services/detail.guard';


const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'error', component: PageNotFoundComponent},
  { path: 'movies/:id', component: MovieDetailComponent, canActivate: [DetailGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
