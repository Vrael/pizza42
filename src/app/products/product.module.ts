import { OrdersHistoryPage } from './orders-history.page';
import { OrdersHistoryComponent } from './orders-history.component';
import { ProductRoutingModule } from './product-routering.module';
import { ProductOrderingPage } from './product-ordering.page';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductOrderingPage,
    OrdersHistoryComponent,
    OrdersHistoryPage
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CartModule,
    SharedModule
  ],
  exports: [
  ]
})
export class ProductModule { }
