import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicListRoutingModule } from './music-list-routing.module';
import { TrackCardComponent } from './components/track-card/track-card.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { SongPageComponent } from './pages/song-page/song-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TrackCardComponent,
    SongCardComponent,
    ArtistCardComponent,
    ArtistPageComponent,
    MusicListComponent,
    SongPageComponent
  ],
  imports: [
    CommonModule,
    MusicListRoutingModule,
    SharedModule

  ]
})
export class MusicListModule { }
