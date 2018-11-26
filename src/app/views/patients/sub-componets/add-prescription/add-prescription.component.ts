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
    msgs: any;

    selectedDrug: Drug = { name: "" };

    newMedicationList: Array<string> = [];
    error: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private prescriptionService: PrescriptionService,
        private selectService: SelectService
    ) {
        this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
        this.selectService
            .select(`medication WHERE StatusId=1`)
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
        let checkDrug = this.drugs.filter(
            x => x.name.toLocaleLowerCase() === drug.name.toLocaleLowerCase()
        );
        let myDrug = { ...drug };
        if (!checkDrug.length) {
            // save the new drug in medication table and return the id

            this.prescriptionService.addMedication(myDrug).subscribe(r => {
                if (r === "MEDICATION_EXIST") {
                    myDrug.medicationId = Number(checkDrug[0].medicationId);
                } else {
                    myDrug.medicationId = Number(r);
                }
            });
        } else {
            myDrug.medicationId = Number(checkDrug[0].medicationId);
        }

        //now push the drug
        console.log(myDrug);

        this.selectedDrugs.push(myDrug);
        this.selectedDrug = {};
    }
    popDrug(drug: Drug) {
        let index = this.selectedDrugs
            .map(x => Number(x.medicationId))
            .indexOf(drug.medicationId);
        if (index >= 0) {
            this.selectedDrugs.splice(index, 1);
        }
    }
    closeModal() {
        this.display = false;
    }
    add() {
        if(!this.diagnosis){
            this.error = "Enter diagnosis";
            return false;
        }
        if(!this.boolPreasure){
            this.error = "Enter blood preasure";
            return false;
        }
        if(!this.pulseRate){
            this.error = "Enter pulse rate";
            return false;
        }
        this.prescriptionObject = {
            diagnosis: this.diagnosis,
            boolPreasure: this.boolPreasure,
            pulseRate: this.pulseRate,
            patientId: this.patientId,
            drugs: this.selectedDrugs
        };

        //save

        this.prescriptionService
            .addPrescription(this.prescriptionObject)
            .subscribe(r => {
                console.log(r);
                this.abort();
            });
    }
}
