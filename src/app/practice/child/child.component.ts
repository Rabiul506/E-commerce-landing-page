import { data } from './../../data';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DocumentDirective } from '../../document.directive';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [DocumentDirective,],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit{

  @Input()
  data!: string; 
  @Output() dataChange = new EventEmitter<string>();

  updateData(newData: string){
    this.data = newData;
    
    this.dataChange.emit(newData);
  }

  @Output() productAdded = new EventEmitter();

  addToCart(){
    this.productAdded.emit(1);
  }

   staffsDetails: any []  = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];
  
  ngOnInit(): void {
    this.staffsDetails.forEach((staffDetail) => {
      let sentence = `I am ${staffDetail.name} a staff of Royal Suites.`;
      console.log(sentence);
    });

    const userFullnames = this.users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  });

  console.log(userFullnames);

  }


  // array map method 

  users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  

  
  // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
  
  
}
