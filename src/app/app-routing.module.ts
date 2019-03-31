import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/music-list/music-list.module#MusicListModule'
  },
  { path: 'signup',
    loadChildren: './modules/signup/signup.module#SignupModule'
   },
  {
    path: 'login',
    loadChildren: './modules/signin/signin.module#SigninModule'
  },
  {
    path: 'error',
    loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule'
  },
  {
    path: '**',
    loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
