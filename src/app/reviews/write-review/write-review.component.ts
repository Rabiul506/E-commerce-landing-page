import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-write-review',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgFor, NgClass, NgIf],
  templateUrl: './write-review.component.html',
  styleUrl: './write-review.component.scss'
})
export class WriteReviewComponent {
  reviewForm = new FormGroup({
    wreview: new FormControl(''),
    
  })

  onSubmit(){
    console.warn(this.reviewForm.value)
  }


  srating = ' ';
  statusCondition = true;

  color = [1, 2, 3, 4, 5];
   currentColor: number = 0;
  changedColer: number = 0;

  ratingNames: string[] = ['Very Poor', 'Poor', 'Neutral', 'Excellent', 'Delightful'];
  currentName: string = ' '; 

 mainColor(rating: number): void{
   this.currentColor = rating;
  this.currentName = this.ratingNames[rating - 1];
  console.log('User rated: ', rating, this.currentName);

 }

 changeToTwo(rating: number): void{
  this.changedColer =  rating;
  this.currentColor = rating;

 }


//  changeToThree(){
//   this.srating = 'Neutral';
//   this.statusCondition = true;
//   console.warn(this.srating);

//  }
//  changeToFour(){
//   this.srating = 'Satisfactory';
//   this.statusCondition = true;
//   console.warn(this.srating);

//  }
//  changeToFive(){
//   this.srating = 'Delightful';
//   this.statusCondition = true;
//   console.warn(this.srating);
//  }

 
}






