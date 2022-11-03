import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SelectComponent } from './shared/components/select/select.component';
import { RangeComponent } from './shared/components/range/range.component';
import { DatepickerComponent } from './shared/components/datepicker/datepicker.component';
import { FormatdatePipe } from './shared/pipes/formatdate.pipe';
import { DatepickerEndComponent } from './shared/components/datepicker-end/datepicker-end.component';
import { AmountComponent } from './shared/components/amount/amount.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SelectComponent,
    RangeComponent,
    DatepickerComponent,
    FormatdatePipe,
    DatepickerEndComponent,
    AmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
