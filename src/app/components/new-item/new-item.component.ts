import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewContainerRef } from '@angular/core';

import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { MessagesComponent } from '../../messages/messages.component';


@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [NgClass, NgFor,MessagesComponent,NgStyle,CommonModule],
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.scss'
})
export class NewItemComponent implements OnInit{
  depeartmentList: Depertment[] = [];

  constructor(
    private http: HttpClient,
    private viewContainerRef: ViewContainerRef,
    private el: ElementRef,
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

    // for practice ng-template 
    @Input() template!: TemplateRef<any>;

    ngAfterViewInit() {
      // Render the received template in the view container
      this.viewContainerRef.createEmbeddedView(this.template);
    }

    updateField(event: KeyboardEvent): void {   
       if (event.key === 'Enter') 
        {      
          console.log('The user pressed enter in the text field.');
        }  
      }

      // updateField2(event: KeyboardEvent): void {
      //       console.log('The user pressed enter in the text field.');
      //       }

      // ng container 

      // @Input() count: number;  
      // @Output() countChange = new EventEmitter<number>();  
      // updateCount(amount: number): void {    
      //   this.count += amount;    
      //   this.countChange.emit(this.count);  
      // }

      // input alias 

      @Input('names1') products1Name!: string;

        // Properties to bind to the template
  userName: string = 'Jane Doe';
  userStatus: string = 'Active';
  userProfileImage: string = 'assets/images/male.png';
  userRole: string = 'admin'; // could be 'admin', 'member', etc.

  // <!-- attribute directive in directive chapter  -->

  color = ' ';
  isColor: boolean = false;

  redColor(){
    this.color = "bg-red-500"
  }

  greenColor(){
    this.color = "bg-green-500"
  }

  cyanColor(){
    this.color = "bg-yellow-500"
  }

  toggleColor(){
    this.isColor = !this.isColor;
  }


  // @Input() appHighlight = 'red';

  // private highlight(color: string) {
  // this.el.nativeElement.style.backgroundColor = color;  
  // }
  // @HostListener('mouseenter') onMouseEnter() {
  //       this.highlight(this.appHighlight || 'red');  
  //     }

}

export interface Depertment {
  departmentId: number,
  departmentName: string,
  departmentLogo: string
}
