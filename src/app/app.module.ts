import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DetailGuard } from './services/detail.guard';
import { AppComponent } from './app.component';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { PointerDirective } from './directive/pointer.directive';
import { MusicItemComponent } from './components/music-item/music-item.component';
import { MusicDetailComponent } from './pages/music-detail/music-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MusicSearchComponent } from './components/music-search/music-search.component';
import { MusicSearchPipe } from './pipes/music-search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    MusicItemComponent,
    PointerDirective,
    MusicDetailComponent,
    PageNotFoundComponent,
    MusicSearchComponent,
    MusicSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
