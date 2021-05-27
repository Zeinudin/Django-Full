import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Reception } from '../model/reception.model';
import { Time } from '../model/time.model';
import { Doctor } from '../model/doctor.model';
import { ReceptionService} from '../reception.service';

import * as moment from 'moment';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-reception',
  templateUrl: './add-reception.component.html',
  styleUrls: ['./add-reception.component.css']
})
export class AddReceptionComponent implements OnInit {

  

  time: Time [] = [];
  doctors: Doctor [] = [];
  
  reception: Reception = {
      "date": "",
      "creation_date": "",
      "patient_info": "",
    }


  constructor(
    private route: ActivatedRoute,
    private receptionService: ReceptionService,
  ) {
   }

  getTime(): void {
    this.receptionService.getTime().subscribe(time => this.time = time);
  }

  getDoctors(): void {
    this.receptionService.getDoctors().subscribe(doctors => this.doctors = doctors);
  }

  ngOnInit(): void {
    this.getTime();
    this.getDoctors();
  }

  saveReception(): void {



    const data: Reception = {
      "date": moment(this.reception.date).format('YYYY-MM-DD'),
      "patient_info": this.reception.patient_info,
      //"user": this.reception.user,
      "time": this.reception.time,
      "doctor": this.reception.doctor 
    }

  
    this.receptionService.createReception(data).subscribe(() => this.newReception())

  }

  

  newReception() : void {
    this.reception = {
      "date": "",
      "patient_info": "",
      "time": 0,
      "doctor": 0
    }
  }

}
