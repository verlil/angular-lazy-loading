import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiscountsComponent} from './discounts.component';
import {DiscountsRoutingModule} from './discounts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DiscountsRoutingModule
  ],
  declarations: [
    DiscountsComponent
  ]
})
export class DiscountsModule { }
