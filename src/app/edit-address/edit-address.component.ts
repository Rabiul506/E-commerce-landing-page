import { CommonModule, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-address',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,JsonPipe,NgIf,NgFor,NgClass],
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.scss'
})
export class EditAddressComponent implements OnInit{

  addressForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address:new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zone: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    landmark: new FormControl('', Validators.required),
    primary: new FormControl(true),

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
      this.addressForm.patchValue({
        primary: false
      })
      
  }

  onSubmit(){
    console.warn(this.addressForm.value)
  }
}
