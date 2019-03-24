import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/music-list/music-list.module#MusicListModule'
  },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: SigninComponent },
  { path: 'error', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
