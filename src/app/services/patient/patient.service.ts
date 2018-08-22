import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/config';
 

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  url: string = API_URL;
  constructor(private http:HttpClient) { }

  addPatient(data): Observable<any>{
    return this.http.post<any>(`${this.url}/patient/add-patient.php`,data);
  }  

  updatePatient(data): Observable<any>{
    return this.http.post<any>(`${this.url}/patient/edit-patient.php`,data);
  } 

}
