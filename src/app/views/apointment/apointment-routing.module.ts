import { ApointmentsComponent } from './apointments/apointments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddAppointmentComponent } from './add-appointment';

const routes: Routes = [
  {
    path: '', component: ApointmentsComponent
  },
  {
    path: 'add/:id', component:AddAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApointmentRoutingModule { }
