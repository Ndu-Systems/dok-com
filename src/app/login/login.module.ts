import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../services';
import { PrimeNg } from '../shared/primeng';

@NgModule({
    imports: [CommonModule,FormsModule,
        ... PrimeNg,
        ReactiveFormsModule, LoginRoutingModule],
    declarations: [LoginComponent],
    exports: [... PrimeNg],
    providers: [AccountService]
})
export class LoginModule {}
