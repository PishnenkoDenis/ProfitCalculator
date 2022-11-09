import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterAmount(amount: number) {
    return amount / 1000 ;
  }
}
