import { Component, Input, OnChanges} from '@angular/core';

import { of } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker-end',
  templateUrl: './datepicker-end.component.html',
  styleUrls: ['./datepicker-end.component.scss']
})
export class DatepickerEndComponent implements OnChanges {

  @Input() term: string;

  termValue: string;

  constructor() { }

  ngOnChanges( ) {

    of(this.term).subscribe(
      (term) => {
        this.termValue = moment().add(term, 'month').format('YYYY-MM-DD');
      }
    );
  }

}
