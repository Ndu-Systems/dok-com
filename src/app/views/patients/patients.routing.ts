import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { ListPatientsComponent } from './list-patients';
import { AddPatientComponent } from './add-patient';
 
 

const routes: Routes = [
  { 
    path: '', component : ListPatientsComponent    
  },
  { 
    path: 'add', component : AddPatientComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatientsRoutes {}
