import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
imports:[
    FormsModule,
    CommonModule,
    RouterModule
],
declarations:[
NavigationComponent
],
exports:[
    NavigationComponent
],
schemas:[
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
] 
})

export class NavigationModule {
}
