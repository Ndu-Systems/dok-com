 
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared';
import { ListPatientsComponent, AddPatientComponent } from './patients';
import { ServiceModule } from '../services';
@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        RouterModule,
        BrowserModule,
        SharedModule,
        ServiceModule
    ],
    declarations:[ 
        HomeComponent,
        ListPatientsComponent,
        AddPatientComponent
    ],
    exports:[  
    ],
    schemas:[
        NO_ERRORS_SCHEMA 
    ] 
    })
export class ViewsModule {
}
