import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  constructor( private authService: AuthService, private musicService: MusicService) { }

  ngOnInit() {
  }

  onSubmit (form: NgForm ) {
    const { email, password, userName, passwordConfirm } = form.value;
    console.log(email, password, userName, passwordConfirm);
    if ( password !== passwordConfirm ) {
      this.musicService.msgInfo(`Password need to match Confirm Password`);
    } else {
      this.authService.signupUser(email, password );
    }

  }

}
