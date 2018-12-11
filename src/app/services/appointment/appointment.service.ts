import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Appointment, IAppointment } from '../../models';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url: string = API_URL;
constructor(private http: HttpClient) { }

  getAppointment(): Observable<Array<IAppointment>> {
    return this.http.get<Array<IAppointment>>(`${this.url}/appointment/get-appointments.php`);
  }

  addAppointment(data): Observable<any> {
    return this.http.post<any>(`${this.url}/appointment/add-appointment.php`, data);
  }

  editAppointment(data): Observable<any>{
    return this.http.post<any>(`${this.url}/appointment/edit-appointment.php`, data);

  }

}
