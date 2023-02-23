import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services.service';
import { FormBuilder } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-account-address',
  templateUrl: './account-address.component.html',
  styleUrls: ['./account-address.component.css'],
})
export class AccountAddressComponent implements OnInit {
  user_address: any;
  country_list: any;
  user_name: any;
  user_mobile: any;
  user_email: any;
  user_address_line1: any;
  user_address_line2: any;
  user_pincode: any;
  constructor(private serve: ServicesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.get();
    this.serve.get('/country-list').subscribe((res: any) => {
      console.log(res);
      this.country_list = res.result;
    });
  }
  edit_button(user: any) {
    this.user_name=user.name;
    this.user_mobile=user.mobile;
    this.user_email=user.email;
    this.user_address_line1=user.address_line1;
    this.user_address_line2=user.address_line2;
    this.user_pincode=user.pincode;
   this.update_address_form.controls['id'].setValue(user.id);
   this.update_address_form.controls['name'].setValue(user.name);
   this.update_address_form.controls['mobile'].setValue(user.mobile);
   this.update_address_form.controls['email'].setValue(user.email);
   this.update_address_form.controls['address_line1'].setValue(user.address_line1);
   this.update_address_form.controls['address_line2'].setValue(user.address_line2);
   this.update_address_form.controls['pincode'].setValue(user.pincode);
  }
  submit() {}
  add_address_form = this.fb.group({
    name: [''],
    id: '0',
    mobile: [''],
    email: [''],
    phone_code: '+91',
    address_line1: [''],
    address_line2: [''],
    country_id: [''],
    state_id: '26',
    city_id: '36',
    type: '1',
    pincode: ['']
  });

  update_address_form=this.fb.group({
    name: [''],
    id: [''],
    mobile: [''],
    email: [''],
    phone_code: '+91',
    address_line1: [''],
    address_line2: [''],
    country_id: [''],
    state_id: '26',
    city_id: '36',
    type: '1',
    pincode: [''],
  })

  country_code(e: any) {
    console.log(e.target.value);
  }

  get() {
    this.serve.get('/address-list').subscribe((res: any) => {
      this.user_address = res.result;
      console.log(this.user_address);
    });
  }

  submit_address() {
    this.serve
      .post('/add-address', this.add_address_form.value)
      .subscribe((res_1: any) => {
        this.add_address_form.reset();
        if (res_1) {
          this.get();
          $('#exampleModal').modal('toggle');
        }
      });
  }

  submit_editaddress() {
    this.serve
      .post('/add-address', this.update_address_form.value)
      .subscribe((res_1: any) => {
        console.log(res_1);
        if (res_1) {
          this.update_address_form.reset();
          this.get();
          $('#exampleModall').modal('toggle');
        }
      });
  }

  delete_button(id_1: any) {
    this.serve.post('/delete-address', { id: id_1 }).subscribe((res_2: any) => {
      if (res_2) {
        this.get();
      }
    });
  }
}
