import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',     
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    
    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
