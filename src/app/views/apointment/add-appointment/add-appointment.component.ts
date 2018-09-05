import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
  animations: [routerTransition()]
})
export class AddAppointmentComponent implements OnInit {
  fromTime: any = {hour: 13, minute: 30};
  toTime: any = {hour: 15, minute: 30};
  constructor() { }

  ngOnInit() {
  }

}
