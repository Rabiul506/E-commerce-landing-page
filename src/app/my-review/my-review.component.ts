import { HttpClient } from '@angular/common/http';
import { ReviewsService } from './../services/reviews.service';
import { JsonPipe, NgClass, NgFor, NgIf, CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProHomeComponent } from '../components/pro-home/pro-home.component';

@Component({
  selector: 'app-my-review',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, JsonPipe, NgFor,NgClass,NgIf,ProHomeComponent],
  templateUrl: './my-review.component.html',
  styleUrl: './my-review.component.scss'
})
export class MyReviewComponent implements OnInit {

  users: any[] = [];
  myReview = new FormGroup({
    writeReview: new FormControl(''),
    rating: new FormControl<number>(5),
    images: new FormArray([])
  })
  
  constructor(
    private elementRef: ElementRef, 
    private reviewsService: ReviewsService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    
  }

  loadUsers(): void {
    this.users = this.reviewsService.getUsers();
  }


  // onSubmit(){
  //   if (this.myReview.valid) {
  //     this.reviewsService.createItem(this.myReview.value)
  //      this.myReview.reset();
  //      this.loadUsers();
  //    }
  //   console.warn(this.myReview.value)


  // }

  // currentColor: number = 0;
  // changedColer: number = 0;

  ratingNames: string[] = ['Very Poor', 'Poor', 'natural', 'Delightfull', 'Excellent'];

  

  starRating(rating:number): void{
    // this.currentColor = rating;
    // console.log('User Rated', ':', rating, this.currentName)
    this.myReview.patchValue({
      rating: rating 
    })
  }

  findRatingExpression(): string {
    return this.ratingNames[(this.myReview.get('rating')?.value as number - 1)];
  }

  addImageName(): void {
    const file: File = (this.elementRef.nativeElement.querySelector('#img-file').files[0])
    const imageUrl = `/assets/images/${file.name}`;
    console.log(file);


    (this.myReview.get('images') as FormArray).push(new FormControl(imageUrl));
    console.log(this.myReview.value)

  }

  images: string[] = []

  reviewProduct: reviewProduct [] = [
    {
      id: 1,
      tittle: 'product1',
      imgs: 'assets/images/sthree.jpg',
      rating: 0,
      images: [],
      comment: '',
    },

    {
      id: 2,
      tittle: 'product2',
      imgs: 'assets/images/stwo.jpg',
      rating: 0,
      images: [],
      comment: '',
    },

    {
      id: 3,
      tittle: 'product3',
      imgs: 'assets/images/t-2.jpg',
      rating: 0,
      images: [],
      comment: '',
    },

  ]

  open = false;

  index:number = 0;

  openForm(i:number){
    this.index = i;
    this.open = true;
    // const formModel = document.getElementById('myModel');
    // if(this.model != null){
    //   this.model.nativeElement.style.display =  'block';
    // }
}
  closeForm(){
    this.open = false;
  }

  reviewForm = new FormGroup({
    rating: new FormControl<number>(5),
    images: new FormArray([]),
    comment: new FormControl(''),
  })


  productRating(rating:number): void{
    this.reviewForm.patchValue({
      rating: rating 
    })
  }
  // this.reviewProduct.push(this.reviewForm.value)


   onSubmit(i:number){
    console.log(this.reviewForm.value)
    
    this.reviewProduct[0].rating = 5;
    console.log(this.reviewProduct[0].rating);

    (this.reviewProduct[i] as any)['rating'] = this.reviewForm.get('rating')?.value;
    (this.reviewProduct[i] as any)['comment'] = this.reviewForm.get('comment')?.value;
    console.log(this.reviewProduct[i])
  
  }


}


export interface reviewProduct{
  id: number,
  tittle: string,
  imgs: string,
  rating: number,
  images: string [],
  comment: string,
}

