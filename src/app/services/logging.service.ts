import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  // Save user data to localStorage
  saveUser(userData: { phone: string,user: string, password: string}): void {
    const storedData = localStorage.getItem('userData');
    const users = storedData ? JSON.parse(storedData) : [];

    // Add the new user to the array
    users.push(userData);
    
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  // Get user data from localStorage
  getUser(): { user: string, password: string } | null {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : null;
  }
}

