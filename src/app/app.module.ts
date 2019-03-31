import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';
import { AlertMsgComponent } from './components/alert-msg/alert-msg.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogInService } from './services/log-in.service';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    AlertMsgComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, LogInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
