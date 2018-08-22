import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../../services';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  FirstName: string;
  Surname: string;
  Email: string;
  Cellphone: string;
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  City: string;
  PostCode: string;  
  msgs: Message[] = [];
  msg :string;
  constructor(    private router : Router,
                  private patientService: PatientService) {
    
   }
  
  ngOnInit() {
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Patient Added Successfully' });
  }
  showError(msg) {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Validation Message', detail: `${msg}` });
  }
  add(){ 
    debugger
    this.msg = undefined;
    if(this.Email == undefined || this.Email === '') {
      this.showError("Please fill in Required Fields");
      return false;
    }
    if(this.FirstName === undefined || this.FirstName === '') {
      this.showError("Please fill in Required Fields");
      return false;
    }
    if(this.Surname === undefined || this.Surname === '') {
      this.showError("Please fill in Required Fields");
      return false;
    }
    if(this.Cellphone === undefined || this.Cellphone === '') {
      this.showError("Please fill in Required Fields");
      return false;
    }
    if(this.AddressLine1 === undefined || this.AddressLine1 === '') {
      this.showError("Please fill in Required Fields");
      return false;
    }
    if(this.AddressLine2 === undefined || this.AddressLine2 === '') {
      this.showError("Please fill in Required Fields");
      return false;
    }
    if(this.AddressLine3 === undefined || this.AddressLine3 === '') {
      this.AddressLine3 = " ";       
    }
    if(this.City === undefined || this.City === '') {
      this.showError("Please fill in Required Fields");      return false;
    }
    if(this.PostCode === undefined || this.PostCode === '') {
      this.showError("Please fill in Required Fields");
      return false;
    }

    let data = {
      FirstName: this.FirstName,
      Surname: this.Surname ,
      Email: this.Email ,
      Cellphone: this.Cellphone ,
      AddressLine1: this.AddressLine1 ,
      AddressLine2: this.AddressLine2 ,
      AddressLine3: this.AddressLine3 ,
      City: this.City ,
      PostCode: this.PostCode ,
      // GlobalKey: this.GlobalKey ,
      // CreateUserId: this.CreateUserId,
      // CreateDate: this.CreateDate ,
      // ModifyUserId: this.ModifyUserId,
      // ModifyDate: this.ModifyDate,
      // StatusId: this.StatusId;
      
    };
     this.patientService.addPatient(data)
     .subscribe(response => {
        if(response == 1){
          this.showSuccess();
              setTimeout(() => {          
                 this.router.navigate(['/patients']);
            
              }, 2000);  
        }
     });
    
  }

}
