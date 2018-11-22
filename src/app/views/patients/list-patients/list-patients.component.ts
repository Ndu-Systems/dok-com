import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { IAddPatient } from '../../../models';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss'],
  animations: [routerTransition()]
})
export class ListPatientsComponent implements OnInit {

  patient : IAddPatient;
  patients$ : Observable<any>;  
  searchText:string;
  p : any
    showAddModal:boolean = false;
  constructor(
    private selectService : SelectService ,
    private route : Router,
    
  ) { }
showAdd(){
    this.showAddModal = true;
}
onCloseAdd(b: boolean): void {
    this.showAddModal = b;
    this.patients$ = this.selectService.select("patient WHERE  StatusId = 1 ORDER BY CreateDate DESC ");
}
  ngOnInit() {
    this.patients$ = this.selectService.select("patient WHERE  StatusId = 1 ORDER BY CreateDate DESC ");
  }
  view(patient){ 
    this.route.navigate(['/patients/view', patient.PatientId]);
  }

  

   
}
