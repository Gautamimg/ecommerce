import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
declare const $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;
  mega_menu_hover: any = 'jstoggle';
  hover: boolean = false;
  hover_1: boolean = true;
  hover_2: boolean = false;
  hover_3: boolean = false;
  hover_4: boolean = false;
  hover_5: boolean = false;
  hover_6: boolean = false;
  hover_7: boolean = false;
  cart_list: any;
cart_listlnth:any;
  constructor(private serve:ServicesService) {}

  ngOnInit(): void {
    this.serve.get('/cart-list').subscribe((res:any)=>{
      console.log(res);
      this.cart_list=res.result;
      this.cart_listlnth=res.result.length;
  })  
this.serve.get_valuechanged().subscribe((res:any)=>{
  console.log(res);
  this.cart_list=res;
  this.cart_listlnth=res?.length;
  console.log(this.cart_listlnth);
})
  }



  mega_text() {
    if (this.isActive == false) {
      this.isActive = true;
    } else if (this.isActive == true) {
      this.isActive = false;
    }
  }
  addClass(event: any) {
    console.log(event.target.value);
    if (event.target.value == 1) {
      this.hover_1 = true;
      this.hover_2 = false;
      this.hover_3 = false;
      this.hover_4 = false;
      this.hover_5 = false;
      this.hover_6 = false;
      this.hover_7 = false;
    }
    if (event.target.value == 2) {
      this.hover_1 = false;
      this.hover_2 = true;
      this.hover_3 = false;
      this.hover_4 = false;
      this.hover_5 = false;
      this.hover_6 = false;
      this.hover_7 = false;
    }
    if (event.target.value == 3) {
      this.hover_1 = false;
      this.hover_2 = false;
      this.hover_3 = true;
      this.hover_4 = false;
      this.hover_5 = false;
      this.hover_6 = false;
      this.hover_7 = false;
    }
    if (event.target.value == 4) {
      this.hover_1 = false;
      this.hover_2 = false;
      this.hover_3 = false;
      this.hover_4 = true;
      this.hover_5 = false;
      this.hover_6 = false;
      this.hover_7 = false;
    }
    if (event.target.value == 5) {
      this.hover_1 = false;
      this.hover_2 = false;
      this.hover_3 = false;
      this.hover_4 = false;
      this.hover_5 = true;
      this.hover_6 = false;
      this.hover_7 = false;
    }
    if (event.target.value == 6) {
      this.hover_1 = false;
      this.hover_2 = false;
      this.hover_3 = false;
      this.hover_4 = false;
      this.hover_5 = false;
      this.hover_6 = true;
      this.hover_7 = false;
    }
    if (event.target.value == 7) {
      this.hover_1 = false;
      this.hover_2 = false;
      this.hover_3 = false;
      this.hover_4 = false;
      this.hover_5 = false;
      this.hover_6 = false;
      this.hover_7 = true;
    }
  }
  removeClass(event: any) {}
}
