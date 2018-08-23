import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss'],
  animations: [routerTransition()]
})
export class ListPatientsComponent implements OnInit {

  patients$ : Observable<any>;  
  searchText:string;
  constructor(
    private selectService : SelectService ,
    private route : Router
  ) { }

  ngOnInit() {
    this.patients$ = this.selectService.select("patient WHERE  StatusId = 1 ORDER BY CreateDate DESC ");
  }
  view(patient){ 
    this.route.navigate(['/patients/view', patient.PatientId]);
  }
}
