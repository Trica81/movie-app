import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';

import { MusicService } from 'src/app/services/music.service';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {



  constructor(private logInService: LogInService, private musicService: MusicService, private fb: FormBuilder) { }

  registerForm: FormGroup;

  get f() { return this.registerForm.controls; }

  MatchPassword(control: AbstractControl) {
    const password = control.get('password').value;

    const confirmPassword = control.get('passwordConfirm').value;

    if (password !== confirmPassword) {
      control.get('passwordConfirm').setErrors({ MatchPassword: true });
    } else {
      return null;
    }
  }


  ngOnInit() {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required)
    }, { validator: this.MatchPassword });
  }

  onSubmit(): void {
    const { email, password } = this.registerForm.value;
    if (this.registerForm.valid) {
      this.logInService.signupUser(email, password);
    } else {
      Object.keys(this.registerForm.controls).forEach(field => {
        const control = this.registerForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }

  }

}
