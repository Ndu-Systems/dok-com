import { Component, OnInit, Input } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';
import { SelectService } from '../../../../shared';

@Component({
  selector: 'app-print-prescription',
  templateUrl: './print-prescription.component.html',
  styleUrls: ['./print-prescription.component.scss']
})
export class PrintPrescriptionComponent implements OnInit {
  @Input() prescription:any;
  @Input() patient:any;
  medication$ : Observable<any>;

  constructor(
    private selectService : SelectService
  ) { }

  ngOnInit() {     
    this.medication$ = this.selectService.select(`medication m
    INNER JOIN prescription_medication_drug pmd on pmd.medicationId = m.medicationId
    WHERE pmd.prescriptionId = ${this.prescription.prescriptionId}  
    AND m.StatusId = 1
    AND pmd.StatusId = 1 `);
  }
  public captureScreen() {
    debugger
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      //required configurations
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); //A4 size of the pdf
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth,imgHeight);
      pdf.save(`prescription for ${this.patient.FirstName} ${this.patient.Surname} ${this.patient.IdNumber}.pdf`);//Generates pdf
    })
  }
}
