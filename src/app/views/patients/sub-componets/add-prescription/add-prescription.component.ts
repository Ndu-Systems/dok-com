import { SelectService } from "./../../../../shared/services/select.service";
import { Component, OnInit } from "@angular/core";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { routerTransition } from "../../../../router.animations";
import { Drug, Prescription } from "../../../../models";
import { PrescriptionService } from "../../../../services";

@Component({
    selector: "app-add-prescription",
    templateUrl: "./add-prescription.component.html",
    styleUrls: ["./add-prescription.component.scss"],
    animations: [routerTransition()]
})
export class AddPrescriptionComponent implements OnInit {
    patientId: number;
    drugs: Array<Drug>;
    selectedDrugs: Array<Drug> = [];
    prescriptionObject: Prescription;
    diagnosis: any;
    boolPreasure: any;
    pulseRate: any;

    selectedDrug: Drug = { name: "" };

    newMedicationList: Array<string> = [];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private prescriptionService: PrescriptionService,
        private selectService: SelectService
    ) {
        this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
        this.selectService
            .select(`medication WHERE status=1`)
            .subscribe(x => (this.drugs = x));
    }

    ngOnInit() {}
    abort() {
        this.router.navigate(["/patients/view", this.patientId]);
    }

    text: string;

    results: string[];

    search(event) {
        this.results = this.drugs.map(x => x.name);
        this.results = this.results.filter(x =>
            x.toLowerCase().includes(event.query.toLowerCase())
        );
    }
    display: boolean = false;

    showDialog() {
        this.display = true;
    }

    pushDrug(drug: Drug) {
        let checkDrug = this.drugs.filter(x=>x.name.toLocaleLowerCase()===drug.name.toLocaleLowerCase());
        let myDrug = {...drug};
            if(!checkDrug.length) {
                // save the new drug in medication table and return the id

                this.prescriptionService.addMedication(myDrug).subscribe(r=>{
                    myDrug.medicaionId = r;
                });
            } else{
                myDrug.medicaionId = checkDrug[0].medicaionId;
            }

            //now push the drug
            console.log(myDrug);
            
            this.selectedDrugs.push(myDrug);

    }
    add() {
        this.prescriptionObject = {
            diagnosis: this.diagnosis,
            boolPreasure: this.boolPreasure,
            pulseRate: this.pulseRate,
            patientId: this.patientId,
            drugs: this.selectedDrugs
        };
    }
    popDrug(drug: Drug) {}
}
