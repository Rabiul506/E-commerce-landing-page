import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

   cartLists: cartList []= [
    {
      productId: 1,
      productName: 'product1',
      unitPrice: 120,
      quantity: 1,
      totalPrice: 120,
      isSelected: true
    },

    {
      productId: 2,
      productName: 'product2',
      unitPrice: 350,
      quantity: 1,
      totalPrice: 350,
      isSelected: true
    }

  ]
// orderSummery object 

  orderSummery = {
    subTotal: 0,
    shippingCost: 0,
    grandTotal: 0
  }

  index: number = 0;

  countUp(i: number){
    
     if(this.cartLists[i].quantity++){
      this.cartLists[i].unitPrice +=  120;
     }
     this.orderSummery.subTotal = this.cartLists[i].unitPrice
  }
  // function myFunction(total, value, index, array) {
  //   return total + value;
  // }
  countLow(i:number){
    
     this.cartLists[i].quantity != 1 && this.cartLists[i].quantity-- 

     if(this.cartLists[i].quantity--){
      this.cartLists[i].unitPrice -=  120;
     }
     this.orderSummery.subTotal = this.cartLists[i].unitPrice
  }
  // is selected product total price as per item 

  updatePrice(i:number){
    this.cartLists[i].isSelected = !this.cartLists[i].isSelected 
    // subTotal =  this.cartLists[i].isSelected
    // if(this.cartLists[i].isSelected == true){
    //   this.orderSummery.subTotal == this.cartLists[i].unitPrice * this.cartLists[i].quantity ;
    // }
  }
}

export interface cartList{
  productId: number;
  productName: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  isSelected: boolean;
}
