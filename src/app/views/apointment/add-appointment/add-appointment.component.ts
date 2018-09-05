import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
  animations: [routerTransition()]
})
export class AddAppointmentComponent implements OnInit {
  defaultTime = {hour: 13, minute: 30};
  constructor() { }

  ngOnInit() {
  }

}
