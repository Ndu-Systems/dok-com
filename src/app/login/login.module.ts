import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../services';

@NgModule({
    imports: [CommonModule,FormsModule,
        ReactiveFormsModule, LoginRoutingModule],
    declarations: [LoginComponent],
    providers: [AccountService]
})
export class LoginModule {}
