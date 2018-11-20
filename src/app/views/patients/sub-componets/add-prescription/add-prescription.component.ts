import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.scss'],
  animations: [routerTransition()]

})
export class AddPrescriptionComponent implements OnInit {
  patientId: number;

  constructor(
    private route:ActivatedRoute,
    private router:Router
    ) { 
    this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
  }
abort(){
  this.router.navigate(['/patients/view', this.patientId]);

}
}
