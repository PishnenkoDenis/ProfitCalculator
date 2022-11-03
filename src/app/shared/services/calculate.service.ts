import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  rate = 0.75;
  termValue: number;
  profitValue: number;

  $procent: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  calculateProfit(term: any = this.termValue, amount: any) {
     let profit: number;
     if (term) {
     this.termValue = term;
     profit = ((amount * this.rate) / 100) * -term;
     } else {
      profit = ((amount * this.rate) / 100) * -this.termValue;
     }
     this.profitValue = profit;
     return profit;
  }

  calculateProcent(amount: any, profit: any) {
     const procent = profit / (amount / 100);
     return procent;
  }

  setProcentOfProfit(amount: any) {
     this.$procent.next(this.calculateProcent(amount, this.profitValue));
  }

  clearProcentStream() {
    this.$procent.next(0);
  }
}
