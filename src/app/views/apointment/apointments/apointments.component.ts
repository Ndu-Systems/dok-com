import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { SelectService } from '../../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apointments',
  templateUrl: './apointments.component.html',
  styleUrls: ['./apointments.component.scss'],
  animations: [routerTransition()]
})
export class ApointmentsComponent implements OnInit { 
  searchText:string;
  appointments$ : Observable<any>
  p : any
  constructor(
      private selectService : SelectService
      ,private router : Router

  ) { }

  ngOnInit() {
    this.appointments$ = 
    this.selectService
        .select("appointment ap INNER JOIN patient p ON ap.PatientId = p.PatientId ORDER BY ap.CreateDate DESC");
  }
  edit(appointment){
    this.router.navigate(['/appointments/edit', appointment.AppointmentId]);  }
}
