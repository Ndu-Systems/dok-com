import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {

  patients$ : Observable<any>;  
  searchText:string;
  constructor(
    private selectService : SelectService 
  ) { }

  ngOnInit() {
    this.patients$ = this.selectService.select("patient WHERE  StatusId = 1 ORDER BY CreateDate DESC ");
  }

}
