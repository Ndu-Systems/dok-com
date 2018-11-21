import { SelectService } from "./../../../../shared/services/select.service";
import { Component, OnInit } from "@angular/core";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { routerTransition } from "../../../../router.animations";
import { Drug } from "../../../../models";

@Component({
    selector: "app-add-prescription",
    templateUrl: "./add-prescription.component.html",
    styleUrls: ["./add-prescription.component.scss"],
    animations: [routerTransition()]
})
export class AddPrescriptionComponent implements OnInit {
    patientId: number;
    drugs: Array<any>;
    selectedDrugs: Array<Drug> = [{name:'TEST',description:'test',dosage:1,unit:2}];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private selectService: SelectService
    ) {
        this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
        selectService
            .select(`medication WHERE status=1`)
            .subscribe(x => (this.drugs = x));
    }

    ngOnInit() {}
    abort() {
        this.router.navigate(["/patients/view", this.patientId]);
    }
    add() {
        alert(JSON.stringify(this.drugs));
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
}
