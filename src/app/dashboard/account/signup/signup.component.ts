import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { ServicesService } from '../../../services.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  input_1: any;
  input_2: any;
  input_3: any;
  input_4: any;
  otp: any;
  otp_value: any = {};
  submitForm: boolean = false;
  constructor(
    private socialog: SocialAuthService,
    private serve: ServicesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  signInWithFB() {
    this.socialog.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWith_google() {
    this.socialog.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  create_account = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    account_type: '1',
  });
  submit_email() {
    console.log(this.create_account.value);
    if (this.create_account.valid) {
      this.serve
        .post('/emailuser-registration', this.create_account.value)
        .subscribe((res: any) => {
          console.log(res);
        });
    } else {
      this.submitForm = true;
    }
  }
  sumbit_otp() {
    this.otp = this.input_1 + this.input_2 + this.input_3 + this.input_4;
    console.log(this.input_2);
    console.log(this.input_3);
    console.log(this.input_4);

    this.otp_value = {
      type: 'email',
      type_value: this.create_account.value.email,
      otp: this.otp,
    };

    console.log(this.otp_value);
    this.serve.post('/validate-otp', this.otp_value).subscribe((res: any) => {
      console.log(res);
    });
  }
}
