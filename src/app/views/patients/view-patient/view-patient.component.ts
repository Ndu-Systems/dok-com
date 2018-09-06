import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';
import { PatientService } from '../../../services/patient';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss'],
  animations: [routerTransition()]
})
export class ViewPatientComponent implements OnInit {

  patient$: Observable<any>
  patientId: number
  msgs: Message[] = [];
  searchText : any
  appointments$ : Observable<any>
  p : any

  constructor(
    private selectService: SelectService,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService
    , private patientService : PatientService
  ) { }

  ngOnInit() {
    this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.patient$ = this.selectService.select(`patient WHERE  PatientId = ${this.patientId}`);
    this.appointments$  =this.selectService.select(`appointment WHERE  PatientId = ${this.patientId} AND StatusId = 1 ORDER BY ModifyDate DESC`);
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Success Message', detail: 'Patient Archived Successfully' });
  }

  archivePatient(patient) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.archive(patient);
      }
    });
  }

  archive(patient){
    let data = { 
      FirstName: patient.FirstName,
      Surname: patient.Surname ,
      Email: patient.Email ,
      Cellphone: patient.Cellphone ,
      AddressLine1: patient.AddressLine1 ,
      AddressLine2: patient.AddressLine2 ,
      AddressLine3: patient.AddressLine3 ,
      City: patient.City ,
      PostCode: patient.PostCode ,
      GlobalKey: patient.GlobalKey ,   
      ModifyUserId: 1,      
      StatusId: 2,
    };
    
    this.patientService.updatePatient(data)
        .subscribe(response => {
          if(response == 1){
            this.showSuccess();
            setTimeout(()=>{
              this.router.navigate(['/patients']);
            },2000);
          }
        })
  
  }

  edit(patient){
    this.router.navigate(['/patients/edit', patient.PatientId]);
  }
  appointment(){
    this.router.navigate(['/appointments/add', this.patientId]);

  }
}
