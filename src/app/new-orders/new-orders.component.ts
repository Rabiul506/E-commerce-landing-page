import { PracticeService } from './../practice.service';
import { myData } from './../data';
import { Component, OnInit } from '@angular/core';
import { HEROES } from '../heros';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroTourService } from '../services/hero-tour.service';


@Component({
  selector: 'app-new-orders',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe,FormsModule],
  templateUrl: './new-orders.component.html',
  styleUrl: './new-orders.component.scss'
})
export class NewOrdersComponent implements OnInit{
  // newOrders = HEROES;
  selectHeros?: myData;

  newOrders: myData[] = [];
  constructor(private heroTourService: HeroTourService, private practiceService: PracticeService){}

    // onSelect(myData: myData): void{
    //   this.selectHeros = myData;
    // }

    ngOnInit(): void {
      this.getHeroes();
    }
  
    onSelect(myData: myData): void {
      this.selectHeros = myData;
      this.practiceService.add(`HeroesComponent: Selected hero id=${myData.id}`);
    }
  
    getHeroes(): void {
      this.heroTourService.getHeroes()
          .subscribe(newOrders => this.newOrders = newOrders);
    }
  
}
