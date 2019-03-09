import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DetailGuard } from './services/detail.guard';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { SongPageComponent } from './pages/song-page/song-page.component';


const routes: Routes = [
  { path: '', component: MusicListComponent },
  { path: 'music', component: MusicListComponent },
  { path: 'error', component: PageNotFoundComponent},
  { path: 'artists/:id', component: ArtistPageComponent},
  { path: 'song/:id', component: SongPageComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
