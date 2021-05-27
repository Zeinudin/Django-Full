import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ReceptionService} from '../reception.service';

@Component({
  selector: 'app-delete-reception',
  templateUrl: './delete-reception.component.html',
  styleUrls: ['./delete-reception.component.css']
})
export class DeleteReceptionComponent implements OnInit {

  id : number = 0;

  constructor(
    private route: ActivatedRoute,
    private receptionService: ReceptionService,
    private location: Location) { }

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {

    
      this.receptionService.deleteReception(this.id).subscribe(() => this.goBack());
    
  }

}
