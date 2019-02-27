import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { PointerDirective } from './directive/pointer.directive';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'error', component: PageNotFoundComponent},
  { path: 'detail/:id', component: MovieDetailComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieItemComponent,
    PointerDirective,
    MovieDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
