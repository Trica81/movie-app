import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit (form: NgForm) {
    const { email, password } = form.value;
    this.authService.signinUser(email, password);
  }

}
