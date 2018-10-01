import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShopsListComponent} from './shops-list/shops-list.component';
import {ShopsPromoComponent} from './shops-promo/shops-promo.component';
import {ShopsComponent} from './shops.component';


const routes: Routes = [
    {
      path: '', component: ShopsComponent, children: [
        {path: 'list', component: ShopsListComponent},
        {path: 'promo', component: ShopsPromoComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule {
}
