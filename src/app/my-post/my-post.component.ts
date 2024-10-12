import { MyDataService } from './../my-data.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-my-post',
  standalone: true,
  imports: [],
  templateUrl: './my-post.component.html',
  styleUrl: './my-post.component.scss'
})
export class MyPostComponent implements OnInit{
  posts: any[] = [];

  constructor(private MyDataService: MyDataService) {}

  ngOnInit() {
    this.posts = this.MyDataService.getData();
  }
}
