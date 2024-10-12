import { HeroTourService } from './../services/hero-tour.service';
import { FormsModule } from '@angular/forms';
import { myData } from './../data';
import { Component, Input } from '@angular/core';
import { NgIf, UpperCasePipe, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-define',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgIf],
  templateUrl: './define.component.html',
  styleUrl: './define.component.scss'
})
export class DefineComponent {
  @Input() message: string = 'this is good product';
  @Input() alartMsz: string = '';

  // @Input() myData?: myData;

  myData: myData | undefined 
  constructor(
    private route: ActivatedRoute,
              private heroTourService: HeroTourService,
              private location: Location
  ){

  }
  // ngOnInit(): void {
  //   this.getHero();
  // }

  // getHero(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.heroTourService.getHero(id)
  //     .subscribe(this.myData => this.myData = this.myData);
  // }
  goBack(): void {
    this.location.back();
  }
}
