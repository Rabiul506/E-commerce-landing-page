import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-loggin-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loggin-page.component.html',
  styleUrl: './loggin-page.component.scss'
})
export class LogginPageComponent{

  isLoginView: boolean = false;

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loggingService: LoggingService
  )
  {

  // Login Form start 

  this.loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })
  // Login Form end 
  }

    navigateToLogin() {
      this.router.navigate(['/singUp']);
    }


  onSubmit(){
    const loginData = this.loginForm.value;
    const storedUserData = this.loggingService.getUser();

    if (storedUserData && storedUserData.user === loginData.user && 
      storedUserData.password === loginData.password) {
      alert('Login successful!');
      // Redirect to dashboard or other page
      this.router.navigate(['/home']); // Example page
      console.log('login successfully');
      console.log(this.loginForm.value);
    } else {
      alert('Invalid credentials');
      console.log('invalid login');

    }
  }

 
}
