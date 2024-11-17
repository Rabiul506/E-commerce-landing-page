import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }
  
  // creatData(users:{name: string, phone: number, email: string, address: string,city: string, state: string,zip: number, zone: string, region: string, landmark: string, primary: string}){
  //     const data = users;
  //     localStorage.setItem('task', JSON.stringify(data));
  // }

  // readData(users: any){

  // }

    // Create or update an item
    setItem(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    // Read an item
    getItem(key: string): any {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  
    // Update an item (if needed, specific to structure)
    updateItem(key: string, updateFn: (currentValue: any) => any): void {
      const currentValue = this.getItem(key);
      if (currentValue !== null) {
        const updatedValue = updateFn(currentValue);
        this.setItem(key, updatedValue);
      }
    }
  
    // Delete an item
    removeItem(key: string): void {
      localStorage.removeItem(key);
    }
}
