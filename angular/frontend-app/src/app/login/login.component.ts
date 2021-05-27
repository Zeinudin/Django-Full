import { Component, OnInit } from '@angular/core';

import { User } from '../model/user.model';
import {UserService} from '../user.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private _userService: UserService,
              private location: Location
    ) { }

  ngOnInit(): void {
  }

  public user: User = {
    username : "",
    password : "",
  };


  loginOnServe() : void {
    const data: User = {
      "username": this.user.username,
      "password": this.user.password
    }

    this._userService.login(data);
  }
  
  goBack(): void {
    this.location.go('');
  }

}
