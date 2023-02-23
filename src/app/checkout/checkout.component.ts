import { Component, OnInit } from '@angular/core';
import {CustompipesPipe} from '../custompipes.pipe';
import { Observable } from 'rxjs'; 
import {ServicesService} from '../services.service';
import { FormBuilder } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  message:any;
  user_data:any;
  constructor(private serve:ServicesService,private fb:FormBuilder, private router:Router) { }

  fileToUpload: any;
  imageUrl: any;
  ngOnInit(): void {
  //   const myObservable = new Observable(observer => {
  //     observer.next('gautam');
      
        
  //       observer.next(
  //         setTimeout(() => {
  //           console.log("b");
  //         }, 2000)
  //       );
    
  //     observer.next('sachin');
  //     observer.next('nagamoto');
  // });

  // myObservable.subscribe(data => {
  //   this.message = data;
  //   console.log(this.message);
  // });

  // this.router.events.subscribe((ev) => {
  //   if (ev instanceof NavigationEnd) { 
  //     alert("checkout")
  //   }
  // })



      this.serve.get_api().subscribe((res:any)=>{
   console.log(
     this.user_data=res.data);
      })
  }
  edit_profile=this.fb.group({
    id:'7',
    first_name:"Michael",
    last_name:"Lawson",
    email:"michael.lawson@reqres.in",
    avatar:['']
  })
  submit(){
    console.log(this.edit_profile.value);
    this.serve.PUT('/users/:id',this.edit_profile.value).subscribe((res:any)=>{
        console.log(res);
        });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
  
    reader.readAsDataURL(file);
  }
  }


