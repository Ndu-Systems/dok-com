import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { AccountService } from '../../../services';
import { AuthenticationService } from '../../../shared/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msgs: Message[] = []
  Msg : string
  Email: any = "system@mail.com"
  Password: any = "pass"
  constructor(
    private router: Router,
    private accountService: AccountService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    localStorage.clear();
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Successfully Verified' });
  }
  showError(msg) {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Validation Message', detail: `${msg}` });
  }

  login() {
    this.Msg = undefined
    if (!this.Email) {
      this.showError("Email is required");
      return false;
    }
    if (!this.Password) {
      this.showError("Password is required");
      return false;
    }
    this.accountService.loginUser(this.Email, this.Password)
    .subscribe(response => {
      let user = response;
      if(user){
        this.showSuccess();
        setTimeout(() => {            
          localStorage.setItem('currentUser',JSON.stringify({username:user.Email}));                
          this.authenticationService.loginUser(user);
        }, 2000);      
      }
      else{
        this.Msg = "Email/Password is not verified";
      }
    });

  }

}
