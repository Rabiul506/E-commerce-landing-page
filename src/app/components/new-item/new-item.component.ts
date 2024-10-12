import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductItemsService } from '../../services/product-items.service';
import { NgModel } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [NgClass],
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
}

export interface Depertment {
  departmentId: number,
  departmentName: string,
  departmentLogo: string
}
