import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component'; 
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
 
 
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { HeaderComponent } from '../layout/components/header/header.component';
import { ViewsRoutingModule } from '.';

@NgModule({
  imports: [
    CommonModule, 
    ViewsRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [ViewsComponent, SidebarComponent, HeaderComponent ]
})
export class ViewsModule { }


 
