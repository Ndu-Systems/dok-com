import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectService } from '../../../shared';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  patients$ : Observable<any>;
  search:string;
  constructor(
    private selectService : SelectService,    
    private route : Router
  ) { }

  ngOnInit() {
    this.patients$ = this.selectService.select("patient WHERE STATUS = 'Active'  AND RowState = 1  ORDER BY CreateDate DESC ");
  }

}
