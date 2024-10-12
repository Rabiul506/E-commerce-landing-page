import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-book',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf, NgFor, NgClass],
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
}
  @ViewChild('myModel') model : ElementRef | undefined; 

  openForm(){
      const formModel = document.getElementById('myModel');
      if(this.model != null){
        this.model.nativeElement.style.display =  'block';
      }
  }

  closeForm(){
    if ( this.model != null){
      this.model.nativeElement.style.display = 'none';
    }
  }
  cardOne: any [] = [ ];

  open = false;
 
 
  deleteItems(){
    this.cardOne.splice(0, 1);
   }

    editItem(){
      this.openForm();
    }

  onSubmit(){
    if(this.cardOne != null){

      if(this.cardOne.length <= 2){
        this.cardOne.push(this.addressForm.value)
      }else{
        console.log(this.addressForm.value)
      }
    }
    }

}
