import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { ListOfMoviesComponent } from './components/list-of-movies/list-of-movies.component';
import { PointerDirective } from './directive/pointer.directive';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    ListOfMoviesComponent,
    PointerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
