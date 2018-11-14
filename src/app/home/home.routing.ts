import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavBarComponent } from './nav-bar';

 
 
const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      { path: '',redirectTo: 'index',pathMatch: 'prefix' },
      { path: 'index', loadChildren : './index/index.module#IndexModule'},
    ]
   },
];

export const declarations = [HomeComponent,NavBarComponent];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutes {}
