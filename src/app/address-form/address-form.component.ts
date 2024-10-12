import { JsonPipe } from '@angular/common';
// import { AddressFormService } from './../address-form.service';
import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent{
  // addressForm: FormGroup;

    // constructor(
    //   private fb: FormBuilder,
    //   private AddressFormService: AddressFormService
    // ) {
    //   this.addressForm = this.fb.group({
    //     name: [''],
    //     phone: [''],
    //     email: [''],
    //     address:[''],
    //     city:[''],
    //     state:[''],
    //     zip:[''],
    //     country: ['']
    //   })

     
    // }

      addressForm = new FormGroup({
        name: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        address:new FormControl('', Validators.required),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
        country: new FormControl('')
      })
  

      onSubmit(){
        console.warn(this.addressForm.value)
      }

 
  }


  // submitted = false;  

  // onSubmit(){
  //   this.submitted = true;
  //   console.warn(this.addressForm.value); 

  // }
  
  // onSubmit(): void {
  //   console.log(this.addressForm.value);
  // }

