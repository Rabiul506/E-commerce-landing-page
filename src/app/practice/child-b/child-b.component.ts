import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-b',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.scss'
})
export class ChildBComponent {
  
  employeForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.employeForm = this.fb.group({
      employName: ['', Validators.required],
      employId: ['', Validators.required],
      employPost: [''],
      team: this.fb.array([])

    })
  }

  get team(): FormArray{
    return this.employeForm.get('team') as FormArray;
  }

  addTeamMember(){
    const teamMemberForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      skills: ['', Validators.required],
    })
    this.team.push(teamMemberForm);
  }

  removeTeamMember(index: number){
    this.team.removeAt(index)
  }

  onSubmit(){
    console.log(this.employeForm.value);
    
  }
}


class ParentClass {
  name: any;
  constructor(name: any) {
    this.name = name;
  }
  showName() {
    return `Hello, ${this.name}`;
  }
}

class ChildClass extends ParentClass {
  age: number;
  constructor(name: string, age: number) {
    super(name); 
    this.age = age;
  }
  showAge() {
    return `${this.name} is ${this.age} years old`;
  }
}


const child = new ChildClass("Arif", 25);
console.log(child.showName()); // "Hello, Arif"
console.log(child.showAge()); // "Arif is 25 years old"