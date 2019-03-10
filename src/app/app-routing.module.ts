import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LogInGuard } from './services/login.guard';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { SongPageComponent } from './pages/song-page/song-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';


const routes: Routes = [
  { path: '', component: MusicListComponent },
  { path: 'music', component: MusicListComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: SigninComponent },
  { path: 'error', component: PageNotFoundComponent},
  { path: 'artists/:id', component: ArtistPageComponent, canActivate: [ LogInGuard ] },
  { path: 'song/:id', component: SongPageComponent, canActivate: [ LogInGuard ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
