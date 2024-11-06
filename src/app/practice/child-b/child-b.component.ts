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
