
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  FirstName: any
  Surname: any
  Email: any
  Cellphone: any
  City: any
  Status: any = "Active"
  Msg : any 
  constructor(
    private patientService: PatientService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  add(){

    this.Msg = undefined;
    if(this.Email == undefined || this.Email == ' '){
      this.Msg ="Email Address Is A Required Field" 
      return false;
    }
    if(this.FirstName == undefined || this.FirstName == ' '){
      this.Msg ="First Name Is A Required Field"
      return false;
    }
    if(this.Surname == undefined || this.Surname == ' '){
      this.Msg ="Surname Is A Required Field"
      return false;
    }
    if(this.City == undefined || this.City == ' '){
      this.Msg ="City Is A Required Field"
      return false;
    }
    if(this.Cellphone == undefined || this.Cellphone == ' '){
      this.Msg ="Cellphone Is A Required Field"
      return false;
    }
    let data ={
      FirstName: this.FirstName,
      Surname: this.Surname,
      Email: this.Email,
      Cellphone: this.Cellphone,
      City: this.City,
      Status: this.Status
    };
    this.patientService.addPatient(data)
      .subscribe((response)=>{
        if(response == "1"){
          alert("patient added successfully!")
        }
        else{
          alert(response)
        }
      })
    
  }

}
