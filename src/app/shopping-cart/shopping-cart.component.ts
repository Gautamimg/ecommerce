import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../app/services.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart_data: any=[];
  quantity:any;
  constructor(private serve:ServicesService,private fb:FormBuilder) {}
  cart_list(){
    this.serve.get('/cart-list').subscribe((res:any)=>{
      if(res.result){
        this.cart_data=res.result
      }else if(res.message){
        alert();
      this.cart_data=[];
      }
    })
  }
  ngOnInit(): void {
   this.cart_list()
  }
  add_cart_form=this.fb.group({
    product_id:[''],
    qty:"1",
    remark:"Test",
    add_type:"add"
  })

  incearse(val:any){
    this.add_cart_form.controls['product_id'].setValue(val.product_id);
    this.serve.post('/add-cart',this.add_cart_form.value).subscribe((res_1:any)=>{
      if(res_1){
        console.log(res_1);
      this.cart_list();
      }  
    })
  }
  dec_cart_form=this.fb.group({
    product_id:[''],
    qty:[''],
    remark:"Test",
    add_type:"update"
  })

  decrease(val:any){
    this.quantity=--val.qty;
    this.dec_cart_form.controls['product_id'].setValue(val.product_id);
    this.dec_cart_form.controls['qty'].setValue(this.quantity);
    this.serve.post('/add-cart',this.dec_cart_form.value).subscribe((res_1:any)=>{
      console.log(res_1);
      
      if(res_1){
      this.cart_list();
      }  
    })
  }

  delete_button(val:any){
    this.serve.post('/delete-cart',{id:val.id}).subscribe((res:any)=>{
      console.log(res);
       if(res){
    this.cart_list();
    this.serve.get('/cart-list').subscribe((res:any)=>{
      this.serve.count(res.result);
    })
    
       }
      
    })
  }
}
