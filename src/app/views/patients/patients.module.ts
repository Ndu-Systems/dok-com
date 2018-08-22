import { PatientsRoutes } from './patients.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule, PrimeNg } from '../../shared'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListPatientsComponent } from './list-patients';
import { AddPatientComponent } from './add-patient';
import { PatientService } from '../../services';
import { ViewPatientComponent } from './view-patient';
import { ConfirmationService } from 'primeng/api';
 
 
@NgModule({
    imports: [CommonModule,FormsModule,Ng2SearchPipeModule, ... PrimeNg,NgxPaginationModule,
        ReactiveFormsModule, PatientsRoutes, PageHeaderModule ],
    declarations: [ListPatientsComponent, AddPatientComponent, ViewPatientComponent],
    exports: [ ... PrimeNg],
    providers: [PatientService,ConfirmationService]
})

export class PatientsModule {}
