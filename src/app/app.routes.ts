import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyPostComponent } from './my-post/my-post.component';
import { Routes } from '@angular/router';
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
import { AddressFormComponent } from './address-form/address-form.component';
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
import { PersonalComponent } from './portfolio/personal/personal.component';
import { ProHomeComponent } from './components/pro-home/pro-home.component';
import { ShipReviewComponent } from './components/ship-review/ship-review.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { StudentFormsComponent } from './student-forms/student-forms.component';
import { ParentComponent } from './practice/parent/parent.component';
import { ChildComponent } from './practice/child/child.component';
import { ChildBComponent } from './practice/child-b/child-b.component';




export const routes: Routes = [
    {   'path': '',
        redirectTo: 'loggin-page',
        pathMatch: 'full'
    },
   
    { 'path': 
        'loggin-page', component:LogginPageComponent,
    },
    {
        'path': 'layout', component:LayoutComponent,
        'children': [
        ]
    },
    {
        'path': 'dashboard', component:DashboardComponent
    },
    {
        'path': 'home', component:HomePageComponent
    }, 
    {
        'path': 'singUp', component:SignUpComponent
    },
    {
        'path': 'admin-login', component:AdminLoginComponent,
    },
    {
         'path': 'personal', component:PersonalComponent,
    },
    {
        'path': 'proHome', component:ProHomeComponent
    },
    {
        'path': 'ship-review', component:ShipReviewComponent 
    },
       {'path': 'manage-accounts', component:ManageAccountsComponent},
            {'path': 'my-orders', component:MyOrdersComponent},
            {'path': 'address-book', component:AddressBookComponent},
            {'path': 'payment-options', component:PaymentOptionsComponent},
            {'path': 'vouchers', component:VouchersComponent},
            {'path': 'my-returns', component:MyReturnsComponent},
            {'path': 'cancelation', component:CancelationComponent},
            {'path': 'reviews', component:ReviewsComponent},
            {'path': 'create-account', component:CreateAccountComponent},
            {'path': 'login', component:LoginComponent},
            {'path': 'seller-login', component:SellerLoginComponent},
            {'path': 'seller-create-account', component:SellerCreateAccountComponent},
            {'path': 'my-accounts', component:MyAccountsComponent},
            {'path': 'faq', component:FaqComponent},
            {'path': 'cart-page', component:CartPageComponent},
            {'path': 'how-to-return', component:HowToReturnComponent},
            {'path': 'my-post', component:MyPostComponent},
            {'path': 'address-form', component:AddressFormComponent},
            {'path': 'write-review', component:WriteReviewComponent},
            {'path': 'my-review', component:MyReviewComponent},
            {'path': 'edit-address', component:EditAddressComponent},
            {'path': 'define', component:DefineComponent},
            {'path': 'get-api', component:GetApiComponent},
            {'path': 'post-api', component:PostApiComponent},
            {'path': 'button-api', component:ButtonApiComponent},
            {
                'path': 'product-model', component:ProductModelComponent
            },
            {
                'path': 'new-orders', component:NewOrdersComponent
            },
            {
                'path': 'messages', component:MessagesComponent
            },
            {
                path: 'newItem', component:NewItemComponent
            },
            {
                path: 'wizard', component:WizardComponent
            },
            {
                path: 'studentForms', component:StudentFormsComponent
            },
            {
                path: 'parent', component:ParentComponent
            },
            {
                path: 'child', component:ChildComponent
            },
            {
                path: 'childB', component:ChildBComponent
            }
           
    
];
