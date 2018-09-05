import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApointmentRoutingModule } from './apointment-routing.module';
import { ApointmentsComponent } from './apointments/apointments.component';
import { PageHeaderModule, PrimeNg } from '../../shared';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { CalendarSchedulerComponent } from './calendar-scheduler';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import { AppointmentService } from '../../services/appointment';
import { AddAppointmentComponent } from './add-appointment';

@NgModule({
  imports: [
    CommonModule,
    ApointmentRoutingModule,
    PageHeaderModule,
    FormsModule,
    Ng2SearchPipeModule, 
    ...PrimeNg, 
    NgbModule.forRoot(),
    NgxPaginationModule,
    HttpModule
  ],
  declarations: [ApointmentsComponent, AddAppointmentComponent],
  exports:[...PrimeNg],
  providers: [AppointmentService]
})
export class ApointmentModule { }
