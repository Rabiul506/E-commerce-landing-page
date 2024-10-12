import { Component } from '@angular/core';
import { DefineComponent } from "../../define/define.component";
import { ButtonApiComponent } from "../button-api/button-api.component";

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [DefineComponent, ButtonApiComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss'
})
export class GetApiComponent {

}
