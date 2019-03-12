import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {



  constructor( private authService: AuthService, private musicService: MusicService, private fb: FormBuilder) { }

  registerForm: FormGroup;

  get f() { return this.registerForm.controls; }

  MatchPassword  (control: AbstractControl) {
    const password = control.get('password').value;

    const confirmPassword = control.get('passwordConfirm').value;

     if (password !== confirmPassword) {
         control.get('passwordConfirm').setErrors( {MatchPassword: true} );
     } else {
      control.get('passwordConfirm').setErrors( {MatchPassword: false} );
     }
 }


  ngOnInit() {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required)
    }, { validator: this.MatchPassword});
  }

  onSubmit ( ) {
    const { email, password, userName, passwordConfirm } = this.registerForm.value;
    console.log(email, password, userName, passwordConfirm);
    if ( password !== passwordConfirm ) {
      this.musicService.msgInfo(`Password need to match Confirm Password`);
    } else {
      this.authService.signupUser(email, password );
    }

  }

}
