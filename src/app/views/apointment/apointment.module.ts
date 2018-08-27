import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApointmentRoutingModule } from './apointment-routing.module';
import { ApointmentsComponent } from './apointments/apointments.component';
import { PageHeaderModule, PrimeNg } from '../../shared';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,ApointmentRoutingModule,PageHeaderModule,FormsModule,Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule
  ],
  declarations: [ApointmentsComponent],
  exports:[...PrimeNg]
})
export class ApointmentModule { }
