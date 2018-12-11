import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import "dhtmlx-scheduler"; 
import {} from "@types/dhtmlxscheduler";
import { AppointmentService } from '../../../services/appointment';
import { Appointment } from '../../../models';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-calendar-scheduler',
  templateUrl: './calendar-scheduler.component.html',
  styleUrls: ['./calendar-scheduler.component.scss']
})
export class CalendarSchedulerComponent implements OnInit {
  @ViewChild("scheduler_here") schedulerContainer: ElementRef;
 
  dd: any
  mm: any
  yyyy: any
  appointmentList : Array<Appointment> = [];

  constructor(private appointmentService : AppointmentService) { }

  ngOnInit() {
    //set current date first
    this.currentDate();
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.init(this.schedulerContainer.nativeElement, new Date(this.yyyy, this.mm, this.dd));
    this.getSchedule()
  }

  currentDate(){
   let today = new Date();
   this.dd = today.getDate();
   this.mm = today.getMonth(); + 1; //January = 0
   this.yyyy = today.getFullYear();
  }

  getSchedule(){
    this.appointmentService.getAppointment()
    .subscribe((data) => {
        this.appointmentList = [];
        data.forEach(data => {
          let objAppointment : Appointment ={
            id : data.AppointmentId,
            start_date : data.StartDate+" "+data.FromTime,
            end_date : data.StartDate+ " "+ data.ToTime,
            text : data.Description
          };
          this.appointmentList.push(objAppointment);
        })    
        scheduler.parse(this.appointmentList, "json");
    });
  }

}
