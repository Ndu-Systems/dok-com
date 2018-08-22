import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss']
})
export class ViewPatientComponent implements OnInit {

  patient$ : Observable<any>
  patientId : number
  constructor(
    private selectService : SelectService,  
    private route: ActivatedRoute,
    private router : Router,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.patient$ = this.selectService.select(`patient WHERE  PatientId = ${this.patientId}`);
  }

}
