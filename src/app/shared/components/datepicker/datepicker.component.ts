import { Component, Input, OnInit } from '@angular/core';


import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  currentDate: string;

  constructor(private dateService: DateService) {
  }

  ngOnInit(): void {
    this.dateService.date.subscribe(

      (date) => {
        this.currentDate = date.format('YYYY-MM-DD');
      }
    );
  }

}
