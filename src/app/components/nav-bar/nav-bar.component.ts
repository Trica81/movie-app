import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MusicService } from 'src/app/services/music.service';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit, OnDestroy {

  title = 'ng-movie-star';
  subscribe = new Subscription();
  private isLogIn: boolean;

  constructor ( private logInService: LogInService, private musicService: MusicService) {}

  logOut () {
    this.logInService.logOut();
  }
  ngOnInit () {
    this.logInService.isLogged();
    this.subscribe = this.logInService.isLoggin$.subscribe(isLog => {
      this.isLogIn = isLog;
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
