import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component'; 
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { HeaderComponent } from '../layout/components/header/header.component';
import { ViewsRoutingModule } from '.';

@NgModule({
  imports: [
    CommonModule, 
    ViewsRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot(),
    NgbModule.forRoot()
  
  ],
  declarations: [ViewsComponent, SidebarComponent, HeaderComponent ]
  ,providers: [NgbActiveModal]
})
export class ViewsModule { }


 
