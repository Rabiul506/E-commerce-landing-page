import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [ReactiveFormsModule],
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
}
