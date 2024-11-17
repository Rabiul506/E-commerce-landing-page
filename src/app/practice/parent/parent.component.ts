import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';
import { ChildBComponent } from '../child-b/child-b.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
  
})
export class ParentComponent implements AfterViewInit{

  @ViewChild('bd') bd!:ElementRef;
  @ViewChild('messageEl') messageEl!: ElementRef;

  ngAfterViewInit(): void {
    this.bd.nativeElement.style.color = 'gray';
    this.messageEl.nativeElement.style.color = 'blue';
      console.log(this.totalPrice);
      console.log(this.findPro);
      
      
  }

   products = [
    { id: 1, name: 'Laptop', price: 1500 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 }
  ];
   findPro = this.products.find(pro => pro.name === 'Tablet')
  totalPrice = this.products.reduce((acc, product) => acc + product.price, 0);
 
  // ng container with ngTemplateOutlet 
  userRoles: string = 'user';

  // @Input Output and two way binding between componnents 
  sharedData = "Initial Value";  // Shared data
  
  onChildDataChange(newData: string){
    this.sharedData = newData;
  }
  
   constructor(private viewContainer: ViewContainerRef){}

   loadContent(){
    this.viewContainer.createComponent(ChildBComponent)
   }

  //  eventemiter practice 

  onProductAdded(productId: number){
    console.log('product added :', productId);
    
  }
}
