import { PatientsRoutes } from './patients.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../shared';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';


 
@NgModule({
    imports: [CommonModule,FormsModule,Ng2SearchPipeModule,NgxPaginationModule,
        ReactiveFormsModule, PatientsRoutes, PageHeaderModule ],
    declarations: [ListPatientsComponent]
})

export class PatientsModule {}
