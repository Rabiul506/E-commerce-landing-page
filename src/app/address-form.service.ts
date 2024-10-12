
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddressFormService {

  private apiUrl = 'https://api.example.com/data';

  constructor(private http: HttpClient) { }

  getAddress(): Observable<Address>{
    return this.http.get<Address>(this.apiUrl).pipe(
      map((data: any) => {
        return {
          name: data.name,
          phone:data.phone,
          email:data.email,
          address: data.address,
          city: data.city,
          state: data.state,
          zip: data.zip,
          country: data.country,
        } as Address;
      })
    );
  }

  
}


export interface Address {
  name: string;
  phone: string;
  email: string;
  address: Address;
  city: string;
  state: string;
  zip: string;
  country: string;
}
