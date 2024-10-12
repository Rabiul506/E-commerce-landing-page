import { HEROES } from './../../heros';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductItemsService } from '../../services/product-items.service';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss'
})
export class PersonalComponent implements OnInit{
  heros = HEROES; 

  constructor(
    private http: HttpClient,
    private productItemsService: ProductItemsService
  ) {
    
  }


  ngOnInit(): void {
    // this.getAllDept();
  }

}


