import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit, OnDestroy {

  title = 'ng-movie-star';
  subscribe = new Subscription();
  private isLogIn: boolean;

  constructor ( private authService: AuthService, private musicService: MusicService) {}

  logOut () {
    this.authService.logOut();
  }
  ngOnInit () {
    this.authService.isLogged();
    this.subscribe = this.authService.isLoggin$.subscribe(isLog => {
      this.isLogIn = isLog;
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
