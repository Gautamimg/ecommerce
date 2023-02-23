import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ServicesService } from '../services.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HeaderComponent],
})
export class HomeComponent implements OnInit {
  top_rated: any;
  child_data: any = [];
  child_data_div: boolean = false;
  child_data_1: any;
  child_data_1_div: boolean = false;
  parent_div: boolean = true;
  addto_cart_val: any;
  slider_image: any;
  res_data: any;
  count: any;
  constructor(
    private serve: ServicesService,
    private fb: FormBuilder,
    private route: Router,
    private head: HeaderComponent
  ) {}

  ngOnInit(): void {
    this.serve.get('/slider-list').subscribe((res: any) => {
    console.log(res);
    this.slider_image = res.result[0];
    });
    $('#addtocart').hide();

    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    this.serve.get('/categorylist').subscribe((res: any) => {
    this.top_rated = res.result;
    console.log(res);
    });
    $('#add-to-cart').hide();
  }

  aLL_div() {
    $('#parent_div').show();
    $('#child_1').hide();
    $('#child_2').hide();
    this.parent_div = true;
  }

  categry(id: any) {
    $('#parent_div').hide();
    $('#child_1').show();
    $('#child_2').hide();
    this.child_data = this.top_rated[id].child;
    console.log(this.child_data);
  }
  get_id(id: any) {
    this.parent_div = false;
    $('#child_1').show();
    $('#parent_div').hide();
    // $('#child_2').show()
    this.child_data = this.top_rated[id].child;
    console.log(this.child_data);
  }

  get_id_1(id: any) {
    $('#child_1').hide();
    $('#child_2').show();
    this.child_data_1 = this.child_data[id].child;
    console.log(this.child_data_1); 
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")
    console.log("hsbbsbkccb")






























































































  }

  dismis() {
  $('#add-to-cart').modal('toggle');
  }

  add_cart_form = this.fb.group({
  product_id: [''],
  qty: '1',
  remark: 'Test',
  add_type: 'add',
  });
  
  toggle(val: any) {
  console.log(val);
  this.addto_cart_val = val;
  this.add_cart_form.controls['product_id'].setValue(val.id);
  console.log(this.add_cart_form.value);

    if (this.add_cart_form.valid) {
    this.serve
    .post('/add-cart', this.add_cart_form.value)
    .subscribe((res: any) => {
     console.log(res);
          this.res_data = res;
          if (res.message == 'Item successfully added into cart.') {
            this.serve.get('/cart-list').subscribe((res: any) => {
              console.log(res);
              this.count = res.result;
              this.serve.count(this.count);
              console.log(this.count);
            });
            $('#add-to-cart').modal('toggle');
          }
        });
    }
  }
  view_cart() {
    $('#add-to-cart').modal('toggle');
    this.route.navigate(['/shopping-cart']);
  }

  wish_list(val: any) {
    this.serve
      .post('/wishlist-product', { product_id: val.id })
      .subscribe((res: any) => {
        console.log(res);
        if (res) {
          this.route.navigate(['/wishlist']);
        }
      });
  }
}
