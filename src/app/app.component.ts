
import { AddressFormComponent } from './address-form/address-form.component';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ManageAccountsComponent } from './components/manage-accounts/manage-accounts.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { VouchersComponent } from './components/vouchers/vouchers.component';
import { MyReturnsComponent } from './components/my-returns/my-returns.component';
import { CancelationComponent } from './components/cancelation/cancelation.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerCreateAccountComponent } from './components/seller-create-account/seller-create-account.component';
import { MyAccountsComponent } from './components/my-accounts/my-accounts.component';
import { FaqComponent } from './components/faq/faq.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { HowToReturnComponent } from './return/how-to-return/how-to-return.component';
import { MyPostComponent } from './my-post/my-post.component';
import { WriteReviewComponent } from './reviews/write-review/write-review.component';
import { MyReviewComponent } from './my-review/my-review.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { DefineComponent } from './define/define.component';
import { GetApiComponent } from './reusableInOut/get-api/get-api.component';
import { PostApiComponent } from './reusableInOut/post-api/post-api.component';
import { ButtonApiComponent } from './reusableInOut/button-api/button-api.component';
import { LogginPageComponent } from './logPage/loggin-page/loggin-page.component';
import { LayoutComponent } from './logPage/layout/layout.component';
import { DashboardComponent } from './logPage/dashboard/dashboard.component';
import { ProductModelComponent } from './product-model/product-model.component';
import { SignUpComponent } from './logPage/sign-up/sign-up.component';
import { AdminLoginComponent } from './logPage/admin-login/admin-login.component';
import { NewOrdersComponent } from './new-orders/new-orders.component';
import { MessagesComponent } from './messages/messages.component';
import { ProHomeComponent } from './components/pro-home/pro-home.component';
import { ShipReviewComponent } from './components/ship-review/ship-review.component';
import { PersonalComponent } from './portfolio/personal/personal.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { WizardComponent } from './components/wizard/wizard.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ProHomeComponent,ShipReviewComponent,PersonalComponent,NewOrdersComponent,MessagesComponent, HomePageComponent,ManageAccountsComponent,MyOrdersComponent,AddressBookComponent,PaymentOptionsComponent, VouchersComponent,MyReturnsComponent,CancelationComponent,ReviewsComponent,CreateAccountComponent,LoginComponent,SellerLoginComponent,SellerCreateAccountComponent,MyAccountsComponent,FaqComponent,CartPageComponent,HowToReturnComponent,AddressFormComponent,MyPostComponent,WriteReviewComponent,MyReviewComponent,EditAddressComponent,DefineComponent,GetApiComponent,PostApiComponent,ButtonApiComponent,LogginPageComponent,LayoutComponent,DashboardComponent,ProductModelComponent,SignUpComponent,AdminLoginComponent,NewItemComponent,WizardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page';
}
