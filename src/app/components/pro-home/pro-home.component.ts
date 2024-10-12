import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pro-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pro-home.component.html',
  styleUrl: './pro-home.component.scss'
})
export class ProHomeComponent implements OnInit{

  // listImage: listImage[] = [
  //   {
  //     imags: '/assets/images/w1.jpg',
  //   },
    
  // ];

  images = [
    { imageUrl: 'assets/images/w1.jpg',},
    { imageUrl: 'assets/images/w2.jpg',},
    { imageUrl: 'assets/images/w3.jpg',},
    { imageUrl: 'assets/images/w4.jpg',},
    { imageUrl: 'assets/images/w5.jpg',},
    { imageUrl: 'assets/images/w6.jpg',},
  ];

  index:number = 0;
  open = false;

  selectItem(i:number){
    this.index = i;
}

selectedImage: string = '';  // Variable to store selected image URL

// Function to set selected image

selectImage(imageUrl: string) {
  this.selectedImage = imageUrl;
}

  // Automatically select the first image on component initialization
  ngOnInit() {
    if (this.images.length > 0) {
      this.selectedImage = this.images[0].imageUrl;
    }
  }

  leftArrow(){
    this.index--
    if(this.index == -1){
      this.index = this.images.length-1
    }
  }

  rightArrow(){
    this.index++
    if(this.index == this.images.length){
      this.index = 0
    }
  }

  username: string = ''

  updateUser(){
    this.username = 'Rabiul'
  }

 
}

// export interface listImage{

//   imags: string;
// }
