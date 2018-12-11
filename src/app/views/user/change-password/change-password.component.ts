import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import {  Message } from 'primeng/api';
import { AccountService } from '../../../services/account';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations: [routerTransition()]
})
export class ChangePasswordComponent implements OnInit {

  user$ : Observable<any>
  userId : number
  OldPassword : any
  NewPassword : any
  ConfirmPassword : any 
  msgs: Message[] = [];
  constructor(
    private selectService: SelectService,
    private route: ActivatedRoute,
    private router: Router,
    private accountService : AccountService
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.user$ = this.selectService.select(`user WHERE  UserId = ${this.userId}`);
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Password Updated Successfully' });
  }
  showError(msg) {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Validation Message', detail: `${msg}` });
  }
  changePassword(user){

    if(this.OldPassword == undefined || this.OldPassword === '') {
      this.showError("Please enter Old Password");
      return false;
    }

    if(this.OldPassword !== user.Password) {
      this.showError("Please enter Old Password");
      return false;
    }
    if(this.NewPassword == undefined || this.NewPassword === '') {
      this.showError("Please enter new Password");
      return false;
    }
    if(this.NewPassword !== this.ConfirmPassword) {
      this.showError("Passwords do not match");
      return false;
    }

    let data = {
      Password : this.NewPassword,
      Email : user.Email,
      UserId : 1
    };

    this.accountService.changePassword(data)
      .subscribe(response => {
          if(response == 1){
            this.showSuccess();
            setTimeout(() => {          
              this.router.navigate(['/login']);         
           }, 2000);
          }
          else{
            this.showError(response);
          }
      });
  }
}
