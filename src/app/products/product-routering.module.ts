import { OrdersHistoryPage } from './orders-history.page';
import { ProductOrderingPage } from './product-ordering.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
    { path: '', component: ProductOrderingPage },
    { path: 'orders', component: OrdersHistoryPage, canActivate: [AuthGuard] },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProductRoutingModule { }
