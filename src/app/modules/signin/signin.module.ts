import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninRoutingModule } from './singin-routing.module';
import { SigninComponent } from './pages/signin/signin.component';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SigninRoutingModule,
    SharedModule
  ]
})
export class SigninModule { }
