import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Appointment } from '../../models';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url: string = API_URL;
constructor(private http: HttpClient) { }

  getAppointment(): Promise<Appointment[]> {

    return Promise.resolve([
      {id: 1, start_date: '2018-09-28 10:00', end_date: '2018-09-28 13:00', text: 'Appointment 1'},
      {id: 2, start_date: '2018-09-29 09:00', end_date: '2018-09-29 11:00', text: 'Appointment 2'},
      {id: 3, start_date: '2018-09-30 08:00', end_date: '2018-09-30 10:00', text: 'Appointment 3'},

    ]);

  }

  addAppointment(data): Observable<any> {
    return this.http.post<any>(`${this.url}/appointment/add-appointment.php`, data);
  }

}
