import { IProductService } from './product.service.interface';
import { Base, Product, Size } from "./product.model";
import { find, from, Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductMockService implements IProductService {
    
    products: Product[] = [
    {
        id: 2,
        name: 'Carbonara',
        image: 'assets/images/pizzas/carbonara.jpg',
        base: Base.Regular,
        size: Size.Large,
        price: 14
    },{
        id: 3,
        name: 'Vegan',
        image: 'assets/images/pizzas/vegan.jpg',
        base: Base.Regular,
        size: Size.Large,
        price: 22

    },{
        id: 4,
        name: 'Bacon',
        image: 'assets/images/pizzas/bacon.jpg',
        base: Base.Regular,
        size: Size.Large,
        price: 16
    },{
        id: 1,
        name: 'Tennessee',
        image: 'assets/images/pizzas/tennessee.jpg',
        base: Base.Regular,
        size: Size.Large,
        price: 18
    },{
        id: 5,
        name: 'Chicken',
        image: 'assets/images/pizzas/cajun.jpg',
        base: Base.Regular,
        size: Size.Large,
        price: 14
    },{
        id: 6,
        name: 'Buffalo',
        image: 'assets/images/pizzas/buffalo.jpg',
        base: Base.Regular,
        size: Size.Large,
        price: 18
    },{
        id: 7,
        name: 'Hiawatha',
        image: 'assets/images/pizzas/hiawatha.jpg',
        base: Base.Regular,
        size: Size.Large,
        price: 16
    },{
        id: 8,
        name: 'Special',
        image: 'assets/images/pizzas/special.jpg',
        base: Base.Regular,
        size: Size.Large,
        price: 24
    }];

    list(): Observable<Product[]> {
        return of(this.products);
    }

    get(id:number): Observable<Product | undefined> {
        return from(this.products).pipe(find(p => p.id == id));
    }
}