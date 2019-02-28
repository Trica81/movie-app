import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DetailGuard } from './services/detail.guard';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { PointerDirective } from './directive/pointer.directive';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';
import { MovieSearchPipe } from './pipes/movie-search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieItemComponent,
    PointerDirective,
    MovieDetailComponent,
    PageNotFoundComponent,
    MoviesSearchComponent,
    MovieSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
