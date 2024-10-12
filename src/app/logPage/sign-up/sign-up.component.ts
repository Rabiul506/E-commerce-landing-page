import { LoggingService } from './../../services/logging.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
    regForm: FormGroup
    constructor(private router: Router, private loggingService: LoggingService ){
      this.regForm = new FormGroup({
        phone: new FormControl('', Validators.required),
        user: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
      })
    }


  navigateToLogin() {
    this.router.navigate(['/loggin-page']);
  }

  onSubmit(){
  //   const isLocalData = localStorage.getItem("regForm")
  //   if(isLocalData != null){
  //     const localArray = JSON.parse(isLocalData);
  //     localArray.push(this.regForm.value);
  //     localStorage.setItem("regForm",JSON.stringify(localArray))
  //   }else{
  //     const localArray = [];
  //     localArray.push(this.regForm.value);
  //     localStorage.setItem("regForm",JSON.stringify(localArray))
  //   }
  //   alert('Registration Success')
  // }
  if (this.regForm.valid) {
    const userData = {
      phone: this.regForm.value.phone,
      user: this.regForm.value.user,
      password: this.regForm.value.password
    };

    // Save user data using UserService
    this.loggingService.saveUser(userData);
    alert('Signup successful!');
    this.router.navigate(['/loggin-page']);
    }
  }
}
