import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';



import {throwError} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  public userIsAuthenticated = false;  
  
  private authListenerSubs: Subscription;
  
  
  constructor(private _userService: UserService) { 
    this.authListenerSubs = this._userService.getAuthStatusListener().subscribe();
  }


  ngOnInit(): void {
    this.authListenerSubs = this._userService.getAuthStatusListener()
    .subscribe(isAuthenticated=>{  
      this.userIsAuthenticated = isAuthenticated;  
    });    
  }

  ngOnDestroy(){  
    this.authListenerSubs.unsubscribe();  
  }

  onLogout() : void{ 
    this._userService.logout();
   }

   

}
