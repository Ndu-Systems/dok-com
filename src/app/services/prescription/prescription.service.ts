import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Drug } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  url: string = API_URL;
  constructor(private http: HttpClient) { }
  
    addMedication(data:Drug): Observable<any> {
      return this.http.post<any>(`${this.url}/prescription/add-medication.php`, data);
    }
  

}
