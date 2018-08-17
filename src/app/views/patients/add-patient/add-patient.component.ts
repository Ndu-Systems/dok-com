import { Component, OnInit } from '@angular/core';
 

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
  msg :string;
  constructor() { }
  
  ngOnInit() {
  }

  add(){ 
    this.msg = undefined;
    if(this.Email == undefined || this.Email === '') {
      this.msg = "Please fill in Required Fields";
      return false;
    }
    if(this.FirstName === undefined || this.FirstName === '') {
      this.msg = "Please fill in Required Fields";
      return false;
    }
    if(this.Surname === undefined || this.Surname === '') {
      this.msg = "Please fill in Required Fields";
      return false;
    }
    if(this.Cellphone === undefined || this.Cellphone === '') {
      this.msg = "Please fill in Required Fields";
      return false;
    }
    if(this.AddressLine1 === undefined || this.AddressLine1 === '') {
      this.msg = "Please fill in Required Fields";
      return false;
    }
    if(this.AddressLine2 === undefined || this.AddressLine2 === '') {
      this.msg = "Please fill in Required Fields";
      return false;
    }
    if(this.AddressLine3 === undefined || this.AddressLine3 === '') {
      this.AddressLine3 = " ";       
    }
    if(this.City === undefined || this.City === '') {
      this.msg = "Please fill in Required Fields";
      return false;
    }
    if(this.PostCode === undefined || this.PostCode === '') {
      this.msg = "Please fill in Required Fields";
      return false;
    }
  }

}
