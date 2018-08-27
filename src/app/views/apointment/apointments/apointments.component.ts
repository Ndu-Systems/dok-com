import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apointments',
  templateUrl: './apointments.component.html',
  styleUrls: ['./apointments.component.scss']
})
export class ApointmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert('Hi');
  }

}
