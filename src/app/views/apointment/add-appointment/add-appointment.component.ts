import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Message } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../../services/appointment';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
  animations: [routerTransition()]
})
export class AddAppointmentComponent implements OnInit {
  fromTime: any = {hour: 12, minute: 30};
  toTime: any = {hour: 12, minute: 30};
  StartDate: any = "";
  Description: any = "";
  patientId : number
  msgs: Message[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService : AppointmentService,
  
  ) { }

  ngOnInit() {
    this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Appointment Created Successfully' });
  }
  add(){
  
    let _objStartDate = JSON.parse(JSON.stringify(this.StartDate));
    let date = _objStartDate.year+'-'+_objStartDate.month+'-'+_objStartDate.day;
    let _objfromTime = JSON.parse(JSON.stringify(this.fromTime));
    let _objtoTime = JSON.parse(JSON.stringify(this.toTime));
    let data = {      
      PatientId : this.patientId,
      StartDate : date,
      EndDate : date,
      Description : this.Description,
      FromTime : _objfromTime.hour+':'+_objfromTime.minute,
      ToTime : _objtoTime.hour+':'+_objtoTime.minute
    }

    this.appointmentService.addAppointment(data)
        .subscribe(response =>{
          if(response == 1){
            this.showSuccess();
            setTimeout(()=>{
              this.router.navigate(['/patients/view', this.patientId]);
            },2000);
          }            
          else
            alert(response)
        })
  }

}