import { Component, OnInit } from '@angular/core';


import { User } from '../model/user.model';
import {UserService} from '../user.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  
  public user: User = {
    username : "",
    password : "",
  };


  RegisterOnServe() : void {
    const data: User = {
      "username": this.user.username,
      "password": this.user.password
    }

    this._userService.register(data);
  }
  
  goBack(): void {
    this.location.go('');
  }

  constructor(private _userService: UserService,
              private location: Location) { }

  ngOnInit(): void {
  }

}
