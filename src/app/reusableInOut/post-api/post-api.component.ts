import { Component } from '@angular/core';
import { DefineComponent } from "../../define/define.component";
import { ButtonApiComponent } from "../button-api/button-api.component";

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [DefineComponent, ButtonApiComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss'
})
export class PostApiComponent {

}
