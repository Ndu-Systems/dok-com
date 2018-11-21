import { AddPrescriptionComponent } from './sub-componets/add-prescription/add-prescription.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPatientsComponent } from './list-patients';
import { AddPatientComponent } from './add-patient';
import { ViewPatientComponent } from './view-patient';
import { EditPatientComponent } from './edit-patient';



const routes: Routes = [
  {
    path: '', component: ListPatientsComponent
  },
  {
    path: 'add', component: AddPatientComponent
  },
  {
    path: 'prescribe/:id', component: AddPrescriptionComponent
  },
  {
    path: 'view/:id', component:ViewPatientComponent
  },
  {
    path: 'edit/:id', component:EditPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatientsRoutes { }
