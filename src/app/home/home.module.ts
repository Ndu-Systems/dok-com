import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { declarations, HomeRoutes } from './home.routing';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    NgbDropdownModule.forRoot()
  ],
  declarations: [...declarations]
})
export class HomeModule { }
