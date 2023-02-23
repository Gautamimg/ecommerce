import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../../services.service';
@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent implements OnInit {
  user_profile: any=[];

  constructor(private serve:ServicesService) { }

  ngOnInit(): void {
    this.serve.get('/user-profile').subscribe((res:any)=>{
      console.log(res);
      this.user_profile=res.data;
    })
  }

}
