import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculateService } from 'src/app/shared/services/calculate.service';
import { DateService } from 'src/app/shared/services/date.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnDestroy{

  numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  currencyItems: Array<string> = ['BTC', 'UAH', 'RUB', 'EUR', 'USD' ];

  depositeType: string;
  depositeAmount: any;
  depositeTerm: any;
  termValue: string;
  $profit: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  amountRange = {
    min: 1000,
    max: 100000,
    step: 100
  };

  termRange = {
    min: 1,
    max: 12,
    step: 1
  };

  constructor(public dateService: DateService,
              public calculateService: CalculateService
  ) { }

  ngOnDestroy(): void {
    this.calculateService.clearProcentStream();
    this.$profit.next(0);
  }

  setDepositeType(event: string) {
     this.depositeType = event;
  }

  setDepositeAmount(event: any) {
    this.depositeAmount = event;
    this.$profit.next(this.calculateService.calculateProfit(null, this.depositeAmount));
  }

  setDepositeTermAndCalculateProfit(event: any) {
    this.depositeTerm = event;
    this.dateService.date.subscribe(
      (date) => {
        const term = date.clone().add(this.depositeTerm, 'month').format('YYYY-MM-DD');
        const diff = date.diff(term, 'days');
        this.$profit.next(this.calculateService.calculateProfit(diff, this.depositeAmount));
        this.calculateService.setProcentOfProfit(this.depositeAmount);
      }
    );
  }

}
