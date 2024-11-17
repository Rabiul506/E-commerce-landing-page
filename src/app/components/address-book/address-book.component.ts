import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressService } from '../../address.service';

@Component({
  selector: 'app-address-book',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgFor, NgIf, NgClass],
  templateUrl: './address-book.component.html',
  styleUrl: './address-book.component.scss'
})
export class AddressBookComponent implements OnInit{

  addressForm : any = new FormGroup ({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address:new FormControl('', Validators.required),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    zone: new FormControl(''),
    region: new FormControl(''),
    landmark: new FormControl(''),
    primary: new FormControl(false),
  })

  // addresList: [] = [];

  // constructor(){
  //   const oldData = localStorage.getItem("addressItem");
  //   if(oldData != null){
  //     const parseData = JSON.parse(oldData);
  //     this.addresList = parseData;
  //   }
  // }

  defaultAddress (){
    this.addressForm.patchValue({
      name: 'rabbi',
      phone: '01758480064',
      address: 'banaraupa road, councilor market',
      city: 'Gazipur',
      zone: 'Gazipur',
      region: 'Dhaka',
      landmark: 'Gazipur',
    })
  }

  ngOnInit(): void {
    this.openForm() !== null 
    this.addressForm.patchValue({
      primary: false
    })
    this.readItem
}
  @ViewChild('myModel') model : ElementRef | undefined; 


  cardOne: any [] = [ ];

  open = false;

    constructor(
      private ad: AddressService,
    ){

    }
// open form 

    openForm(){
      const formModel = document.getElementById('myModel');
      if(this.model != null){
        this.model.nativeElement.style.display =  'block';
      }
  }
// close form 

  closeForm(){
    if ( this.model != null){
      this.model.nativeElement.style.display = 'none';
    }
  }

  // save data 

   onSubmit(){

    if(this.cardOne != null){

      if(this.cardOne.length <= 2){

        this.cardOne.push(this.addressForm.value)
        this.ad.setItem('task', this.addressForm.value)
        this.cardOne
    
      }else{
        console.log(this.addressForm.value)
      }
    }
  }

    readItem() {
      const item = this.ad.getItem('task');
      this.addressForm = item ? JSON.stringify(item) : 'No item found!';
    }

    updateAddres() {
      this.ad.updateItem('task', (currentValue) => {
        return { ...currentValue, version: '18.1' }; // Example update
      });
      this.addressForm.value = 'Item updated!';
    }

    // remove data 
    
    removeItem(i: number){

        if(this.cardOne.length >= 0){
          this.cardOne.splice(i, 1)
          this.ad.removeItem('task');
          this.addressForm = 'Item deleted!';
        }else{
          alert('no item to delete')
        }

    }

}
