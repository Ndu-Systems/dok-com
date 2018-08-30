import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import "dhtmlx-scheduler"; 
import {} from "@types/dhtmlxscheduler";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-calendar-scheduler',
  templateUrl: './calendar-scheduler.component.html',
  styleUrls: ['./calendar-scheduler.component.scss']
})
export class CalendarSchedulerComponent implements OnInit {
  @ViewChild("scheduler_here") schedulerContainer: ElementRef;
  constructor() { }

  ngOnInit() {
    scheduler.init(this.schedulerContainer.nativeElement, new Date());
  }

}
