import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './dashboard/account/signin/signin.component';
import { SignupComponent } from './dashboard/account/signup/signup.component';
import { AccountComponent } from './dashboard/myaccount/account/account.component';
import { AccountProfileComponent } from './dashboard/myaccount/account-profile/account-profile.component';
import { AccountAddressComponent } from './dashboard/myaccount/account-address/account-address.component';
import { AccountTrackComponent } from './dashboard/myaccount/account-track/account-track.component';
import { AccountOrdersComponent } from './dashboard/myaccount/account-orders/account-orders.component';
import { AccountPaymentComponent } from './dashboard/myaccount/account-payment/account-payment.component';
import { AccountReturnComponent } from './dashboard/myaccount/account-return/account-return.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { BlogleftsidebarComponent } from './blog/blogleftsidebar/blogleftsidebar.component';
import { BlogmasonryComponent } from './blog/blogmasonry/blogmasonry.component';
import { BlogdetailsComponent } from './blog/blogdetails/blogdetails.component';
import { LostpasswordComponent } from './dashboard/myaccount/lostpassword/lostpassword.component';
import { EditprofileComponent } from './dashboard/myaccount/editprofile/editprofile.component';
import { EditaddressbookComponent } from './dashboard/myaccount/editaddressbook/editaddressbook.component';
import { ManageorderComponent } from './dashboard/myaccount/manageorder/manageorder.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustominterceptorInterceptor} from './custominterceptor.interceptor';
import { CustompipesPipe } from './custompipes.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    AccountComponent,
    AccountProfileComponent,
    AccountAddressComponent,
    AccountTrackComponent,
    AccountOrdersComponent,
    AccountPaymentComponent,
    AccountReturnComponent,
    ProductDetailComponent,
    ShopGridComponent,
    ShoppingCartComponent,
    WishlistComponent,
    CheckoutComponent,
    FaqComponent,
    AboutusComponent,
    ContactComponent,
    Page404Component,
    BlogleftsidebarComponent,
    BlogmasonryComponent,
    BlogdetailsComponent,
    LostpasswordComponent,
    EditprofileComponent,
    EditaddressbookComponent,
    ManageorderComponent,
    CustompipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    SocialLoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LazyLoadImageModule,
  ],
    providers: [ {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '295867526286-06c53e2vavtji481udllj47bbo3u5p01.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('3501319223238121')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustominterceptorInterceptor,
      multi: true
    }   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
