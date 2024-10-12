import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  standalone: true,
  imports: [ReactiveFormsModule,MyOrdersComponent,RouterLink],
  templateUrl: './seller-login.component.html',
  styleUrl: './seller-login.component.scss'
})
export class SellerLoginComponent {


  sellerLogin: any =new FormGroup({
    Email: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required)
  })

  onSubmit(){
    console.log(this.sellerLogin.value)
    
  }
}
