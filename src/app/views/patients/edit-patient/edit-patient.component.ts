import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';
import { PatientService } from '../../../services/patient';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  patient$: Observable<any>
  patientId: number
  msgs: Message[] = [];
  constructor(
    private selectService: SelectService,
    private route: ActivatedRoute,
    private router: Router,
    private patientService : PatientService
  ) { }

  ngOnInit() {
    this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.patient$ = this.selectService.select(`patient WHERE  PatientId = ${this.patientId}`);
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Patient Updated Successfully' });
  }

  save(patient){
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
      StatusId: patient.StatusId,
    };
    
    this.patientService.updatePatient(data)
        .subscribe(response => {
          if(response == 1){
            this.showSuccess();
            setTimeout(()=>{
              this.router.navigate(['/patients/view', patient.PatientId]);
            },2000);
          }
        })
  }

}
