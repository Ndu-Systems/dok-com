import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import "dhtmlx-scheduler"; 
import {} from "@types/dhtmlxscheduler";
import { AppointmentService } from '../../../services/appointment';

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

  constructor(private appointmentService : AppointmentService) { }

  ngOnInit() {
    //set current date first
    this.currentDate();
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.init(this.schedulerContainer.nativeElement, new Date(this.yyyy, this.mm, this.dd));
    this.appointmentService.getAppointment()
          .then((data) => {
            scheduler.parse(data, "json");
          });
  }

  currentDate(){
   let today = new Date();
   this.dd = today.getDate();
   this.mm = today.getMonth(); + 1; //January = 0
   this.yyyy = today.getFullYear();
  }

}
