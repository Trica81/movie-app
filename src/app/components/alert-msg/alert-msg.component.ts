import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Subscription } from 'rxjs';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.sass']
})
export class AlertMsgComponent implements OnInit, OnDestroy {


  info = {
    message: '',
    msgClass: ''
  };
  subscription: Subscription;
  msgSub: Subscription;


  constructor( private musicService: MusicService, private logInService: LogInService, private el: ElementRef) { }

  isShow = false;

  msgShow(msg) {
    this.isShow = true;
    this.info = msg;
    setTimeout(() => {
      this.isShow = false;
    }, 3000);
  }

  ngOnInit() {
    this.subscription = this.musicService.msg$.subscribe(item => {
      this.msgShow(item);
    });

    this.msgSub = this.logInService.error$.subscribe(error => {
      this.msgShow(error);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.msgSub.unsubscribe();
  }

}
