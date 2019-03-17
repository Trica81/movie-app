import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  constructor( private logInService: LogInService) { }

  ngOnInit() {
  }

  onSubmit (form: NgForm) {
    const { email, password } = form.value;
    this.logInService.signinUser(email, password);
  }

}
