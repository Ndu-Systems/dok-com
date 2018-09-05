import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { SelectService } from '../../../shared';

@Component({
  selector: 'app-apointments',
  templateUrl: './apointments.component.html',
  styleUrls: ['./apointments.component.scss'],
  animations: [routerTransition()]
})
export class ApointmentsComponent implements OnInit { 
  searchText:string;
  appointments$ : Observable<any>
  constructor(
      private selectService : SelectService
  ) { }

  ngOnInit() {
    this.appointments$ = 
    this.selectService
        .select("appointment ap INNER JOIN patient p ON ap.PatientId = p.PatientId ORDER BY ap.CreateDate DESC");
  }

}
