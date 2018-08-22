import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule, PrimeNg } from '../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserRouting } from './user.routing';
import { ChangePasswordComponent } from './change-password';

@NgModule({
    imports: [CommonModule, FormsModule, UserRouting, Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
        ReactiveFormsModule, PageHeaderModule],
    declarations: [ChangePasswordComponent],
    exports: [...PrimeNg],
    providers: []
})
export class UserModule {}
