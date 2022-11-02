import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SelectComponent } from './shared/components/select/select.component';
import { RangeComponent } from './shared/components/range/range.component';
import { DatepickerComponent } from './shared/components/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SelectComponent,
    RangeComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
