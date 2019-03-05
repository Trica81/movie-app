import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DetailGuard } from './services/detail.guard';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { MusicDetailComponent } from './pages/music-detail/music-detail.component';


const routes: Routes = [
  { path: '', component: MusicListComponent },
  { path: 'music', component: MusicListComponent },
  { path: 'error', component: PageNotFoundComponent},
  { path: 'music/:id', component: MusicDetailComponent, canActivate: [DetailGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
