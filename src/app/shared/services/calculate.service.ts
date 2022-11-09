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
     if (amount) {
      if (term) {
        this.termValue = term;
        profit = ((amount * this.rate) / 100) * -term;
        } else {
         profit = ((amount * this.rate) / 100) * -this.termValue;
        }
      this.profitValue = profit;
      return profit;
     }
     this.termValue = term;
     return 0;
  }

  calculateProcent(amount: any, profit: any) {
     const procent = profit / (amount / 100);
     return procent;
  }

  setProcentOfProfit(amount: any) {
    if (amount) { this.$procent.next(this.calculateProcent(amount, this.profitValue)); }
    else { this.$procent.next(0); }
  }

  clearProcentStream() {
    this.$procent.next(0);
  }
}
