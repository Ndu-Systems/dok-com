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
  constructor(private appointmentService : AppointmentService) { }

  ngOnInit() {
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.init(this.schedulerContainer.nativeElement, new Date(2018, 8, 1));
    this.appointmentService.getAppointment()
          .then((data) => {
            scheduler.parse(data, "json");
          });
  }

}
