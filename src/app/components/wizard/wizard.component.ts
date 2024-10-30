import { Component, computed, ElementRef, input, OnInit, TemplateRef, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, NgControlStatus, ReactiveFormsModule } from '@angular/forms';
import { NewItemComponent } from "../new-item/new-item.component";
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [ReactiveFormsModule, NewItemComponent,NgComponentOutlet,NgTemplateOutlet],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})
export class WizardComponent implements OnInit {

  employeFrom = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })

  ngOnInit(): void {
      
  }
  employeCard: any [] = [];

  @ViewChild('myModel') model : ElementRef | undefined; 

  openList(){
    const formModel = document.getElementById('myModel');
    if(this.model != null){
      this.model.nativeElement.style.display = 'block'
    }
  }

  colseList(){
    if(this.model != null){
      this.model.nativeElement.style.display = 'none'
    }
  }

  open = false;

onSubmit(){
  this.employeCard.push(this.employeFrom.value)
  console.log(this.employeFrom.value);

}

// for practice ng-template 
@ViewChild('myTemplate', { read: TemplateRef }) myTemplate!: TemplateRef<any>;

constructor(private viewContainerRef: ViewContainerRef) {}

// Method to display the template fragment
displayTemplate() {
  this.viewContainerRef.createEmbeddedView(this.myTemplate);
}

// Method to clear the view if needed
clearTemplate() {
  this.viewContainerRef.clear();
}

initialCount = 18;

isAdmin = input(false); 
adminTemplate = viewChild('admin', {read: TemplateRef});
basicTemplate = viewChild('basic', {read: TemplateRef}); 
profileTemplate = computed(() => this.isAdmin() ? this.adminTemplate() : this.basicTemplate());

}
