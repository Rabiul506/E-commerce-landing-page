import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private storageKey = 'users';
  constructor() { }

  // / Create

  createItem(user: any): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  // Read
  
  getUsers(): any[]  {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  // Update
  // updateUser(index: number, updatedUser: any): void {
  //   const users = this.getUsers();
  //   users[index] = updatedUser;
  //   localStorage.setItem(this.storageKey, JSON.stringify(users));
  // }

  // Delete
  deleteUser(index: number): void {
    const users = this.getUsers();
    users.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}
