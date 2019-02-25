import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesStartComponent } from './view/movies-start/movies-start.component';
import { MovieComponent } from './view/movies-start/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesStartComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
