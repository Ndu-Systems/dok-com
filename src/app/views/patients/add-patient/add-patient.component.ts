
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services';
import { Router } from '@angular/router';
import { Patient } from '../../../models';

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
  AddressLine1: any
  AddressLine2: any
  AddressLine3: any
  PostCode: any
  Msg: any
  user : any
  constructor(
    private patientService: PatientService,
    private route: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log("user",this.user);    
  }

  add() {

    this.Msg = undefined;
    if (this.Email == undefined || this.Email == ' ') {
      this.Msg = "Email Address Is A Required Field"
      return false;
    }
    if (this.FirstName == undefined || this.FirstName == ' ') {
      this.Msg = "First Name Is A Required Field"
      return false;
    }
    if (this.Surname == undefined || this.Surname == ' ') {
      this.Msg = "Surname Is A Required Field"
      return false;
    }
    if (this.City == undefined || this.City == ' ') {
      this.Msg = "City Is A Required Field"
      return false;
    }
    if (this.Cellphone == undefined || this.Cellphone == ' ') {
      this.Msg = "Cellphone Is A Required Field"
      return false;
    }
    if (this.AddressLine1 == undefined || this.AddressLine1 == ' ') {
      this.Msg = "AddressLine1 Is A Required Field"
      return false;
    }
    if (this.AddressLine2 == undefined || this.AddressLine2 == ' ') {
      this.Msg = "AddressLine1 Is A Required Field"
      return false;
    }
    if (this.PostCode == undefined || this.PostCode == ' ') {
      this.Msg = "Post Code Is A Required Field"
      return false;
    }
    let data = {
      FirstName: this.FirstName,
      Surname: this.Surname,
      Email: this.Email,
      Cellphone: this.Cellphone,
      City: this.City,
      StatusId: 1,
      AddressLine1: this.AddressLine1,
      AddressLine2: this.AddressLine2,
      AddressLine3: this.AddressLine3,
      PostCode: this.PostCode,
      CreateUserId :this.user.userId,    
      ModifyUserId :this.user.userId
    };
    this.patientService.addPatient(data)
      .subscribe((response) => {
        if (response == "1") {
          alert("patient added successfully!")
        }
        else {
          alert(response)
        }
      })

  }

}
