import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-api',
  standalone: true,
  imports: [],
  templateUrl: './button-api.component.html',
  styleUrl: './button-api.component.scss'
})
export class ButtonApiComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';
}
