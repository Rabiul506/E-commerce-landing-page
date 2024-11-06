import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-forms',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './student-forms.component.html',
  styleUrl: './student-forms.component.scss'
})
export class StudentFormsComponent {

  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      teamMembers: this.fb.array([]) // Initialize an empty FormArray for team members
    });
  }

  // Getter for easy access to the teamMembers FormArray
  get teamMembers(): FormArray {
    return this.projectForm.get('teamMembers') as FormArray;
  }

  // Method to add a new team member FormGroup
  addTeamMember() {
    const teamMemberForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      skills: this.fb.array([]) // Initialize an empty FormArray for skills
    });
    this.teamMembers.push(teamMemberForm);
  }

  // Method to remove a team member by index
  removeTeamMember(index: number) {
    this.teamMembers.removeAt(index);
  }

  // Getter for the skills FormArray of a specific team member
  getSkills(index: number): FormArray {
    return this.teamMembers.at(index).get('skills') as FormArray;
  }

  // Method to add a skill to a specific team member
  addSkill(teamMemberIndex: number) {
    const skillControl = this.fb.control('', Validators.required);
    this.getSkills(teamMemberIndex).push(skillControl);
  }

  // Method to remove a skill by index from a specific team member
  removeSkill(teamMemberIndex: number, skillIndex: number) {
    this.getSkills(teamMemberIndex).removeAt(skillIndex);
  }

  onSubmit() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);
    }
  }

}
