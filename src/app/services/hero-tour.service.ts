import { Observable, of } from 'rxjs';
import { PracticeService } from './../practice.service';
import { Injectable } from '@angular/core';
import { myData } from '../data';
import { HEROES } from '../heros';


@Injectable({
  providedIn: 'root'
})
export class HeroTourService {

  constructor(private practiceService: PracticeService) { 

  }

  getHeroes(): Observable<myData[]>{
    const newOrders = of(HEROES);
    this.practiceService.add('HeroTourService: fetched newOrders');
    return newOrders;
  }

  getHero(id: number): Observable<myData> {
    // For now, assume that a newOrders with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const newOrders = HEROES.find(h => h.id === id)!;
    this.practiceService.add(`HeroTourService: newOrders hero id=${id}`);
    return of(newOrders);
  }
}
