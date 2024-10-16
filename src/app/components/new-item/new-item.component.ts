import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductItemsService } from '../../services/product-items.service';
import { NgModel } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';
import { MessagesComponent } from '../../messages/messages.component';

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [NgClass, NgFor,MessagesComponent],
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.scss'
})
export class NewItemComponent implements OnInit{
  depeartmentList: Depertment[] = [];

  constructor(
    private http: HttpClient,
  ) {
    
  }

  ngOnInit(): void {
    this.getAllDept();
  }

    // api form online 

    getAllDept(){
      this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
          this.depeartmentList = res.data
      })
    }

    // for @Input and @output practice 
    categories: string[] = ['All', 'Electronics', 'Books', 'Clothing'];

    products = [
      { name: 'Smartphone', price: 499, category: 'Electronics' },
      { name: 'Laptop', price: 999, category: 'Electronics' },
      { name: 'Novel', price: 20, category: 'Books' },
      { name: 'T-shirt', price: 15, category: 'Clothing' },
    ];
    filteredProducts = [...this.products];
  
    onCategorySelected(category: string) {
      this.filteredProducts = category === 'All' ? this.products : this.products.filter(product => product.category === category);
    }
}

export interface Depertment {
  departmentId: number,
  departmentName: string,
  departmentLogo: string
}
