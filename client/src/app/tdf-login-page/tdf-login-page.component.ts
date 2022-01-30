import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css'],
})
export class TdfLoginPageComponent implements OnInit {
  msg: string = '';

  constructor() {}

  ngOnInit(): void {}

  checkUser(nameRef: NgForm) {
    let login = nameRef.value;
    console.log(login);

    if (login.user == 'Raj' && login.password == '123') {
      this.msg = 'Successgul login';
    } else {
      this.msg = 'try again';
    }
  }
}
