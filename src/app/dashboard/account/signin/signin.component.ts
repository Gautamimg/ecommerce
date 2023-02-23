import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { ServicesService } from '../../../services.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private socialog: SocialAuthService,
    private fb: FormBuilder,
    private serve: ServicesService
  ) {}
  submitForm: boolean = false;
  ngOnInit(): void {}

  signInWithFB() {
    this.socialog.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWith_google() {
    this.socialog.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  login_form = this.fb.group({
    type: 'email',
    type_value: ['', Validators.required],
    password: ['', Validators.required],
  });
  submit_login() {
    console.log(this.login_form.value);
    if (this.login_form.valid) {
      this.serve.post('/login', this.login_form.value).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.token));
        this.login_form.reset();
      });
    } else {
      this.submitForm = true;
    }
  }
}
