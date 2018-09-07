import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';
import { PatientService } from '../../../services/patient';
import { routerTransition } from '../../../router.animations';
import { AppointmentService } from '../../../services';

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
    , private appointmentService : AppointmentService
  ) { }

  ngOnInit() {
    this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.patient$ = this.selectService.select(`patient WHERE  PatientId = ${this.patientId}`);
    this.appointments$  =this.selectService.select(`appointment WHERE  PatientId = ${this.patientId} AND StatusId = 1 ORDER BY ModifyDate DESC`);
  }
  showSuccess(msg) {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Success Message', detail: msg });
  }

  archivePatient(patient) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.patientArchive(patient);
      }
    });
  }

  patientArchive(patient){
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
            this.showSuccess("Customer Archived Successfully!");
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
  editAppointment(appointment) {
    this.router.navigate(['/appointments/edit', appointment.AppointmentId]);
  }
  archiveAppointment(appointment) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.appointmentArchive(appointment);
      }
    });
  }
  appointmentArchive(appointment){
    let _objStartDate = JSON.parse(JSON.stringify(appointment.StartDate));
    let date = _objStartDate.year+'-'+_objStartDate.month+'-'+_objStartDate.day;
    let _objfromTime = JSON.parse(JSON.stringify(appointment.FromTime));
    let _objtoTime = JSON.parse(JSON.stringify(appointment.ToTime));
    let data = {
      Description: appointment.Description,
      AppointmentId: appointment.AppointmentId,
      PatientId: appointment.PatientId, 
      StartDate: date,
      EndDate: date,
      FromTime : _objfromTime.hour+':'+_objfromTime.minute,
      ToTime : _objtoTime.hour+':'+_objtoTime.minute,
      CreateUserId: appointment.CreateUserId,
      CreateDate: appointment.CreateDate,
      ModifyUserId: 1, 
      StatusId: 2,
    }
    debugger
    this.appointmentService.editAppointment(data)
        .subscribe(response => {
          if(response == 1){
            this.showSuccess("Appointment Archived Successfully!");
            setTimeout(()=>{
              this.router.navigate(['/patients']);
            },2000);
          }
        })
  }
}
