import { Product } from "./product.model";

export class Order {
    id: string = '';
    created: string = new Date().toUTCString();
    address: string = '';
    products: Product[] = [];
}