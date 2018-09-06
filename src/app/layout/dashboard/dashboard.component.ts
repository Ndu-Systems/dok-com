import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SelectService } from '../../shared';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    counts$ : Observable<any>
    constructor(
        private selectService: SelectService
    ) 
    {}

    ngOnInit() {
        this.counts$ = this.selectService.getCounts();
     }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
