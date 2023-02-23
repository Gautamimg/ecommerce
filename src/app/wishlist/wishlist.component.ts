import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wish_list_data: any;
  addto_cart_val: any;

  constructor(private serve: ServicesService, private fb: FormBuilder,private route:Router) {}

  ngOnInit(): void {
    $('#add-to-cart').hide();
    this.serve.get('/wishlist-product-list').subscribe((res: any) => {
      console.log(res);
      this.wish_list_data = res.result;
    });
  }
  add_cart_form = this.fb.group({
    product_id: [''],
    qty: '1',
    remark: 'Test',
    add_type: 'add',
  });

  wishlist_remove(val: any) {
    this.serve
      .post('/delete-wishlist-product', { wishlist_id: val.wishlistid })
      .subscribe((res: any) => {
        console.log(res);
        if (res) {
          this.ngOnInit();
        }
      });
  }

  add_cart(val: any) {
    this.addto_cart_val = val;
    $('#add-to-cart').modal('toggle');
    this.add_cart_form.controls['product_id'].setValue(val.variant_productid);
    this.serve
      .post('/add-cart', this.add_cart_form.value)
      .subscribe((res: any) => {
        console.log(res);
   });
  }
  dismis() {
    $('#add-to-cart').modal('toggle');
  }
  view_cart(val: any) {
    if(val){
  $('#add-to-cart').modal('toggle');
   this.route.navigate(['/shopping-cart']);}
  }
}
