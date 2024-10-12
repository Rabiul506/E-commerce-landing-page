import { PracticeService } from './practice.service';
import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor() { }
  getData() {
    return data;
  }

}
