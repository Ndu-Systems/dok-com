 
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared';
import { ListPatientsComponent, AddPatientComponent, PatientsComponent } from './patients';
import { ServiceModule } from '../services';
import { LoginComponent } from './accounts';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        RouterModule,
        BrowserModule,
        SharedModule,
        ServiceModule,
        Ng2SearchPipeModule,
        NgxPaginationModule
    ],
    declarations:[ 
        HomeComponent,
        ListPatientsComponent,
        AddPatientComponent,
        PatientsComponent,
        LoginComponent
    ],
    exports:[  
    ],
    schemas:[
        NO_ERRORS_SCHEMA 
    ] 
    })
export class ViewsModule {
}
