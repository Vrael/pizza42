import { Observable } from "rxjs";
import { Product } from "./product.model";

export interface IProductService {
    list(): Observable<Product[]>;
    get(id:number): Observable<Product|undefined>;
}