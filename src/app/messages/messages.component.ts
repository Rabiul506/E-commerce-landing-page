import { PracticeService } from './../practice.service';
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  constructor(public practiceService: PracticeService){}

  // for practice input and outout decorator 
  @Input() categories: string[] = [];
  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
