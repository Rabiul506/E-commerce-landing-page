import { data } from './../../data';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DocumentDirective } from '../../document.directive';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [DocumentDirective,],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input()
  data!: string; 
  @Output() dataChange = new EventEmitter<string>();

  updateData(newData: string){
    this.data = newData;
    
    this.dataChange.emit(newData);
  }
}
