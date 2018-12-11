import { ApointmentsComponent } from './apointments/apointments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddAppointmentComponent } from './add-appointment';
import { EditAppointmentComponent } from './edit-appointment';

const routes: Routes = [
  {
    path: '', component: ApointmentsComponent
  },
  {
    path: 'add/:id', component:AddAppointmentComponent
  },
  {
    path: 'edit/:id', component:EditAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApointmentRoutingModule { }
