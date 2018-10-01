import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopsListComponent} from './shops-list/shops-list.component';
import {ShopsRoutingModule} from './shops-routing.module';
import { ShopsPromoComponent } from './shops-promo/shops-promo.component';
import {ShopsComponent} from './shops.component';

@NgModule({
  imports: [
    CommonModule,
    ShopsRoutingModule
  ],
  declarations: [
    ShopsComponent,
    ShopsListComponent,
    ShopsPromoComponent
  ]
})
export class ShopsModule {
}
