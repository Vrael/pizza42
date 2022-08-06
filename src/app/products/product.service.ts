import { IProductService } from './product.service.interface';
import { Base, Product, Size } from "./product.model";
import { find, from, Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService implements IProductService {

    constructor(private httpClient: HttpClient) {
    }

    list(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('/api/v1/products')
    }

    get(id:number): Observable<Product | undefined> {
        return this.httpClient.get<Product>("/api/v1/products?id=${id}");
    }
}