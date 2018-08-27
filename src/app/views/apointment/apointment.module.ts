import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApointmentRoutingModule } from './apointment-routing.module';
import { ApointmentsComponent } from './apointments/apointments.component';

@NgModule({
  imports: [
    CommonModule,ApointmentRoutingModule
  ],
  declarations: [ApointmentsComponent]
})
export class ApointmentModule { }
