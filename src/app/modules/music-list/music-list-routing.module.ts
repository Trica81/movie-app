import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { SongPageComponent } from './pages/song-page/song-page.component';
import { MusicListComponent } from './pages/music-list/music-list.component';

const routes: Routes = [
  {
    path: '',
    component: MusicListComponent
  },
  {
    path: 'artists/:id',
    component: ArtistPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'song/:id',
    component: SongPageComponent,
    canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicListRoutingModule { }
