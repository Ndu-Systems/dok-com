import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { AppointmentService } from '../../../services/appointment';
import { Message } from 'primeng/api';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.scss'],
  animations: [routerTransition()]
})
export class EditAppointmentComponent implements OnInit {

  appointmentId: number 
  appointment$ : Observable<any>
  msgs: Message[] = [];

  constructor(
    private selectService : SelectService
    ,private route : ActivatedRoute
    ,private router: Router
    ,private appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    this.appointmentId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.appointment$ = this.selectService.select(`appointment WHERE  AppointmentId = ${this.appointmentId}`);
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Appointment Updated Successfully' });
  }

  save(appointment){
    let _objStartDate = JSON.parse(JSON.stringify(appointment.StartDate));
    let date = _objStartDate.year+'-'+_objStartDate.month+'-'+_objStartDate.day;
    let _objfromTime = JSON.parse(JSON.stringify(appointment.FromTime));
    let _objtoTime = JSON.parse(JSON.stringify(appointment.ToTime));
    let data = {
      Description: appointment.Description,
      AppointmentId: this.appointmentId,
      PatientId: appointment.PatientId, 
      StartDate: date,
      EndDate: date,
      FromTime : _objfromTime.hour+':'+_objfromTime.minute,
      ToTime : _objtoTime.hour+':'+_objtoTime.minute,
      CreateUserId: appointment.CreateUserId,
      CreateDate: appointment.CreateDate,
      ModifyUserId: 1, 
      StatusId: appointment.StatusId,
    }
    debugger
    this.appointmentService.editAppointment(data)
        .subscribe(response => {
          if(response == 1){
            this.showSuccess();
            setTimeout(()=>{
              this.router.navigate(['/patients/view', appointment.PatientId]);
            },2000);
          }
        })
  }
}
