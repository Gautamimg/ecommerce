import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../../services.service';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-editaddressbook',
  templateUrl: './editaddressbook.component.html',
  styleUrls: ['./editaddressbook.component.css']
})
export class EditaddressbookComponent implements OnInit {
  edituser_data: any;
name:string="jahul";
  constructor(private serve:ServicesService,private fb:FormBuilder) { }
  country_list:any=[]
  ngOnInit(): void {
//  console.log(JSON.parse(localStorage.getItem('user') || "{}"));
    this.edituser_data=JSON.parse(localStorage.getItem('user') || "{}")
    console.log(this.edituser_data);  
    this.serve.get("/country-list").subscribe((res:any)=>{
      console.log(res);
      this.country_list=res.result;
    })
  }
  update_address_form=this.fb.group({
name:[''],
id:"0",
mobile:[''],
email:[''],
phone_code:"+91",
address_line1:[''],
address_line2:[''],
country_id:[''],
state_id:"26",
city_id:"36",
type:"1",
pincode:['']
  })
  country_code(e:any){
  console.log(e.target.value);
  }
  submit_address(){
   this.serve.post('/add-address',this.update_address_form.value).subscribe((res:any)=>{
    console.log(res);
    this.update_address_form.reset();
   })  
  }
}
