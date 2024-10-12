import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductItemsService {

  private storageKey = 'users';

  constructor( private http: HttpClient,

  ) {}

  // Create
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

  postData(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data);
  }


  getData(url: string): Observable<any[]> {   // remove after refactoring central menu
    console.log("service");

    return this.http.get<any[]>(url);
  }


  putData(url: string, data: any): Observable<any> {
    return this.http.put<any>(url, data);
  }

  deleteData(url: string): Observable<any> {
    return this.http.delete<any>(url);
  }

  getAllDept(url: string){}
}
