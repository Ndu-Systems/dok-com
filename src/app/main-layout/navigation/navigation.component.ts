import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn$: Observable<boolean>; 
  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }
  onLogout(){
    this.authenticationService.logoutUser();
  }

}
