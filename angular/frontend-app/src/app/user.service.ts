import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './model/user.model';

import { MessageService } from './message.service';
import { DataAuth } from './model/dataAuth.model';

import { Observable, of, Subject } from "rxjs"; 

import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuthenticated = false;

  // текущий JWT токен
  public token: string | undefined = '';

  // логин пользователя
  public username: string = '';

  public user : User = {};

  // сообщения об ошибках авторизации
  public errors: any = [];



  private authStatusListener = new Subject<boolean>(); 


  // используем http.post() для получения токена
  public login(user: User){
    this.messageService.add('' + user.username + ' ' + user.password);
    this.http.post('http://127.0.0.1:8000/api/auth_token/token/login', user).subscribe(
      data => {
        this.updateData(data);
        this.getSomethink(data);
        this.authStatusListener.next(true);  
        this.goBack();
        
      },
      err => {
        this.errors = err['error'];
        this.messageService.add(err);
      }
    );
  }

  public register(user: User) {
    this.http.post('http://127.0.0.1:8000/api/api/register/', user).subscribe(
      data => {
        this.afterRegister(user);
        //this.goBack();
      },
      err => {
        this.errors = err['error'];
        this.messageService.add(err);
      }
    );
  }

  public afterRegister (user: User) {
    this.login(user);
  }

  public logout() {
    this.token = "";
    this.username = "";
    this.user = {};
    localStorage.removeItem("currentUser");
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    window.location.reload();
  }
  //-------------------------------------------------------------


  getIsAuthenticated() {
    this.isAuthenticated = localStorage.getItem("currentUser") != null;
    return this.isAuthenticated;
  }

  getAuthStatusListener() {  
    return this.authStatusListener.asObservable();  
  }  

  //-------------------------------------------------------------

  private updateData(data: DataAuth) {
    this.token = data.auth_token;
    this.errors = [];
    
    localStorage.setItem("currentUser", JSON.stringify(data.auth_token));
    this.isAuthenticated = true;
  }

  getSomethink(data : DataAuth) : void {
    this.messageService.add('' + data.auth_token);
  }

  goBack(): void {
    this.location.back();
  }

  constructor( private http: HttpClient, 
               private messageService: MessageService,
               private location: Location ) { 
  }
}
