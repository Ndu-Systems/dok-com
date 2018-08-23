import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  user$ : Observable<any>
  userId : number
  OldPassword : any
  NewPassword : any
  ConfirmPassword : any 
  constructor(
    private selectService: SelectService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.user$ = this.selectService.select(`user WHERE  UserId = ${this.userId}`);
  }
  
  changePassword(user){

  }
}
