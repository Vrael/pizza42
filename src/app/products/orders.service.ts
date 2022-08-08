import { Injectable } from '@angular/core';
import { concatMap, from, map, Observable, of, pluck, tap } from 'rxjs';
import { UserMetadataService } from '../core/auth/user-metadata.service';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private metadata: UserMetadataService
  ) { }

  create(order: Order): Observable<Order> {
    order.id = this.generateId(6) // In the real life, this should be generated by the backend when the object will be created.

    return this.metadata.get()
      .pipe(
        pluck('orders'),
        map((orders) => {
          let list = (orders || []);
          list.push(order)
          return list;
        }),
        tap(x=> console.log(x)),
        concatMap(orders => this.metadata.update({ orders: orders })),
        map(order => order)
      )
  }

  list(): Observable<Order[]> {
    return this.metadata.get()
      .pipe(
        pluck('orders')
      );
  }

  private generateId(length = 8): string {
    return Math.random().toString(16).substr(2, length);
  }

}