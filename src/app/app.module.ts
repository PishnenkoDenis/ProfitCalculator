import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SelectComponent } from './shared/components/select/select.component';
import { RangeComponent } from './shared/components/range/range.component';
import { DatepickerComponent } from './shared/components/datepicker/datepicker.component';
import { DatepickerEndComponent } from './shared/components/datepicker-end/datepicker-end.component';
import { AmountComponent } from './shared/components/amount/amount.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SelectComponent,
    RangeComponent,
    DatepickerComponent,
    DatepickerEndComponent,
    AmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
