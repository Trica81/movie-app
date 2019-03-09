import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Subscription } from 'rxjs';

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
  subscription$: Subscription;

  constructor( private musicService: MusicService, private el: ElementRef) { }


  ngOnInit() {
    this.subscription$ = this.musicService.msg$.subscribe(item => {
      this.el.nativeElement.style.display = 'block';
      this.info = item;
      setTimeout(() => {
        this.el.nativeElement.style.display = 'none';
      }, 3000);
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
