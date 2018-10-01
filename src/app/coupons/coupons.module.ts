import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CouponsRoutingModule} from './coupons-routing.module';
import {CouponsComponent} from './coupons.component';

@NgModule({
  imports: [
    CommonModule,
    CouponsRoutingModule
  ],
  declarations: [
    CouponsComponent
  ]
})
export class CouponsModule { }
