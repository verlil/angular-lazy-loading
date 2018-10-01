import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppPreloadingStrategy} from './app-preloading-strategy';

const appRoutes: Routes = [
  {path: 'shops', loadChildren: './shops/shops.module#ShopsModule'},
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule',
    data: { preload: true, delay: false }
    },
  {
    path: 'discounts',
    loadChildren: './discounts/discounts.module#DiscountsModule',
    data: { preload: true, delay: true },
  },
  {
    path: 'coupons',
    loadChildren: './coupons/coupons.module#CouponsModule',
    data: { preload: false, delay: true },
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: AppPreloadingStrategy
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
