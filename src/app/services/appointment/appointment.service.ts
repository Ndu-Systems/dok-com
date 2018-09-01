import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Appointment } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

constructor() { }

  getAppointment() : Promise<Appointment[]>{
  
    return Promise.resolve([
      {id: 1, start_date: "2018-08-28 10:00", end_date: "2018-08-28 13:00", text: "Appointment 1"}, 
      {id: 2, start_date: "2018-08-29 09:00", end_date: "2018-08-29 11:00", text: "Appointment 2"}, 
      {id: 3, start_date: "2018-08-30 08:00", end_date: "2018-08-30 10:00", text: "Appointment 3"}, 

    ])
   
  }

}
