import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IAddPatient } from '../../../models';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss'],
  animations: [routerTransition()]
})
export class ListPatientsComponent implements OnInit {

  patient : IAddPatient;
  patients$ : Observable<any>;  
  searchText:string;
  p : any

  constructor(
    private selectService : SelectService ,
    private route : Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.patients$ = this.selectService.select("patient WHERE  StatusId = 1 ORDER BY CreateDate DESC ");
  }
  view(patient){ 
    this.route.navigate(['/patients/view', patient.PatientId]);
  }

  //modal
  closeResult: string;

  open(content) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
          this.closeResult = `Add Customer Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Add Customer Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return `with: ${reason}`;
      }
  }
}
