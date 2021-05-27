import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Reception } from '../model/reception.model';
import { ReceptionService} from '../reception.service';

import { Time } from '../model/time.model';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-reception-detail',
  templateUrl: './reception-detail.component.html',
  styleUrls: ['./reception-detail.component.css'],

  encapsulation: ViewEncapsulation.None,
})
export class ReceptionDetailComponent implements OnInit {


  time: Time [] = [];
  doctors: Doctor [] = [];
  reception: Reception  = {};

  constructor(
    private route: ActivatedRoute,
    private receptionService: ReceptionService,
    private location: Location
  ) { 
    
  }

  ngOnInit(): void {
    ;
    this.getReception();
    
  }

  goBack(): void {
    this.location.back();
  }

  getReception(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.receptionService.getReception(id)
      .subscribe(reception => this.reception = reception);
    this.getDoctors();
    this.getTime()
  }

  getTime(): void {
    this.receptionService.getTime().subscribe(time => this.time = time);
    var time = this.reception.time;
    this.reception.time = time;

  }

  getDoctors(): void {
    this.receptionService.getDoctors().subscribe(doctors => this.doctors = doctors);
  }



  save(): void {

    var rec = {};

    if (this.reception) {

      // rec = {
      //   "id": this.reception.id,
      //   "date": this.reception.date,
      //   "creation_date": this.reception.creation_date,
      //   "patient_info": this.reception.patient_info,
      //   "time": this.reception.time,
      //   "doctor": this.reception.doctor
      // }

      this.receptionService.updateReception(this.reception).subscribe(() => this.goBack());
    }
  }

}
