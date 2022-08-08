import { OrdersHistoryPage } from './orders-history.page';
import { ProductOrderingPage } from './product-ordering.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
    { path: '', component: ProductOrderingPage, data: { title: 'Order your product!' } },
    { path: 'orders', component: OrdersHistoryPage, canActivate: [AuthGuard], data: { title: 'Orders!' } },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProductRoutingModule { }
