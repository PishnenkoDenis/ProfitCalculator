import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnimationService } from 'src/app/shared/services/animation.service';

import { CalculateService } from 'src/app/shared/services/calculate.service';
import { DateService } from 'src/app/shared/services/date.service';
import { FilterService } from 'src/app/shared/services/filter.service';

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

  amountCase: number;

  $profit: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  @ViewChild('grade', {static: false})  public gradeRef: ElementRef;

  @ViewChild('backGrade', {static: false})  public backGradeRef: ElementRef;

  amountRange = {
    min: 0,
    max: 100000,
    step: 100
  };

  termRange = {
    min: 1,
    max: 12,
    step: 1
  };

  constructor(public dateService: DateService,
              public calculateService: CalculateService,
              public filterService: FilterService,
              private animationService: AnimationService
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
    this.amountCase = this.filterService.filterAmount(+this.depositeAmount);
    this.animationService.runAnimation(this.amountCase, this.gradeRef);
    this.animationService.runAnimation(this.amountCase, this.backGradeRef);
    this.$profit.next(this.calculateService.calculateProfit(null, +this.depositeAmount));
    this.calculateService.setProcentOfProfit(this.depositeAmount);
  }

  setDepositeTermAndCalculateProfit(event: any) {
    this.depositeTerm = event;
    this.dateService.date.subscribe(
      (date) => {
        const term = date.clone().add(this.depositeTerm, 'month').format('YYYY-MM-DD');
        const diff = date.diff(term, 'days');
        this.$profit.next(this.calculateService.calculateProfit(diff, +this.depositeAmount));
        this.calculateService.setProcentOfProfit(this.depositeAmount);
      }
    );
  }

}
