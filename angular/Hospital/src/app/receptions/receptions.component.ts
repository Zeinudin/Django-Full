import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Reception, ReceptionForList } from '../model/reception.model';
import { Doctor} from '../model/doctor.model';

//import { RECEPTIONS} from '../model/mock-receptions';

import { ReceptionService } from '../reception.service';
import { MessageService } from '../message.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule} from '@angular/material/list';

//--------------------------------------------------------

import { User } from '../model/user.model';
import {UserService} from '../user.service';
import {throwError} from 'rxjs';

import { Subscription } from 'rxjs';

//--------------------------------------------------------

@Component({
  selector: 'app-receptions',
  templateUrl: './receptions.component.html',
  styleUrls: ['./receptions.component.css']
})

export class ReceptionsComponent implements OnInit, OnDestroy  {

  public userIsAuthenticated = false;  
  
  private authListenerSubs: Subscription;

  refresh(): void {
    this.getReceptions();
  }

  perfReception: ReceptionForList[] = [];
  receptions: Reception[] = [];
  doctors: Doctor[] = [];
  
  getReceptions(): void {
    this.receptionService.getReceptions().subscribe(receptions => this.receptions = receptions);
  }

  getDoctors(): void {
    this.receptionService.getDoctors().subscribe(doctors => this.doctors = doctors);
  }



  

  constructor(private _userService: UserService,
              private receptionService: ReceptionService) { 
                this.authListenerSubs = this._userService.getAuthStatusListener().subscribe();
  }

  ngOnInit(): void {
    this.getReceptions();
    this.getDoctors();
    this.authListenerSubs = this._userService.getAuthStatusListener()
    .subscribe(isAuthenticated=>{  
      this.userIsAuthenticated = isAuthenticated;  
    }); 
  }

  ngOnDestroy(){  
    this.authListenerSubs.unsubscribe();  
  }

}
