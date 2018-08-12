import { PatientsRoutes } from './patients.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../shared';
import { ListPatientsComponent } from './list-patients/list-patients.component';
 
@NgModule({
    imports: [CommonModule, PatientsRoutes, PageHeaderModule ],
    declarations: [ListPatientsComponent]
})

export class PatientsModule {}
