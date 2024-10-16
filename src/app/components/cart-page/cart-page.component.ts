
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms';



@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ NgIf,],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit{

   cartLists: cartList []= [
    {
      productId: 1,
      productName: 'product1',
      unitPrice: 120,
      quantity: 1,
      totalPrice: 120,
      isSelected: false
    },

    {
      productId: 2,
      productName: 'product2',
      unitPrice: 350,
      quantity: 1,
      totalPrice: 350,
      isSelected: false
    }

  ]
// orderSummery object 

  orderSummery = {
    subTotal: 0,
    shippingCost: 60,
    grandTotal: 0
  }

  index: number = 0;
  
  countUp(i: number): void {
    this.cartLists[i].quantity++;
    this.cartLists[i].totalPrice = this.cartLists[i].unitPrice * this.cartLists[i].quantity;
    this.calculateSubTotal();
  }


  countLow(i:number): any{
    if (this.cartLists[i].quantity > 1) {
      this.cartLists[i].quantity--;
      this.cartLists[i].totalPrice = this.cartLists[i].unitPrice * this.cartLists[i].quantity;
      this.calculateSubTotal();
    }

  }


  calculateSubTotal(): void {
    this.orderSummery.subTotal = this.cartLists
      .filter(item => item.isSelected) // Only include selected items
      .reduce((sum, item) => sum + item.totalPrice, 0);

    this.calculateGrandTotal();
  }

    // Calculate the grand total by adding shipping cost
    calculateGrandTotal(): void {
      this.orderSummery.grandTotal = this.orderSummery.subTotal + this.orderSummery.shippingCost;
    }

  // is selected product total price as per item 
  
  // isSelected:Boolean = false;
  isChecked: boolean = false;  // Track checkbox state
  
  updatePrice(i:number,){
    this.cartLists[i].isSelected = !this.cartLists[i].isSelected;
    this.calculateSubTotal()
      
    }

  ngOnInit(): void {
      this.calculateSubTotal()
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
