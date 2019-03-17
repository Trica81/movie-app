import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { PointerDirective } from './directive/pointer.directive';
import { MusicDetailComponent } from './pages/music-detail/music-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MusicSearchComponent } from './components/music-search/music-search.component';
import { MusicSearchPipe } from './pipes/music-search.pipe';
import { TrackCardComponent } from './components/track-card/track-card.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { DurationPipe } from './pipes/duration.pipe';
import { AlertMsgComponent } from './components/alert-msg/alert-msg.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { SongPageComponent } from './pages/song-page/song-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogInService } from './services/log-in.service';



@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    TrackCardComponent,
    PointerDirective,
    MusicDetailComponent,
    PageNotFoundComponent,
    MusicSearchComponent,
    MusicSearchPipe,
    ArtistPageComponent,
    ArtistCardComponent,
    DurationPipe,
    AlertMsgComponent,
    SongCardComponent,
    SongPageComponent,
    SignupComponent,
    SigninComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, LogInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
