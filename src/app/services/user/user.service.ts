import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = API_URL
  constructor(private httpClient: HttpClient) { }


}
