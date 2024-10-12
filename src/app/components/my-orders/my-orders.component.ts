import { Component } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent {
  tittle = 'Super Screen Rib Trouser for Men - Black';
  qty = '2';
  status = 'pending';
  statusCondition = true;

 changeToCancel(){
  this.status = 'Canceled';
  this.statusCondition = true;
 }
 changeToProcessing(){
  this.status = 'Processing';
  this.statusCondition = true;
 }
}
