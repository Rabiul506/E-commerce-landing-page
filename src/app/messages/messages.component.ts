import { PracticeService } from './../practice.service';
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule,ReactiveFormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  // constructor(public practiceService: PracticeService){}

  // for practice input and outout decorator 
  @Input() categories: string[] = [];
  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }


  // Reactive forms 

  jobApplicationForm: FormGroup;

  constructor(
    public practiceService: PracticeService,
    private fb: FormBuilder
  )
  {
    this.jobApplicationForm = this.fb.group({
      name: ['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      skills: this.fb.array([])
    })
  }

  // Getter for easy access to the FormArray controls

  get skills(): FormArray {
    return this.jobApplicationForm.get('skills') as FormArray;
  }

  // Method to add a new skill control

  addSkill(){
    const skillForm = this.fb.group({
      skillName: ['', [Validators.required]],
      experience: ['', [Validators.required, Validators.min(1)]] 
    });

    this.skills.push(skillForm)
  }

  // Method to remove a skill control
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.jobApplicationForm.valid) {
      console.log(this.jobApplicationForm.value);
    }
  }
}
