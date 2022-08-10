import { Component } from "@angular/core";

@Component({
    selector: 'app-product-ordering',
    template: `
        <div fxLayout="row wrap" fxLayoutGap="16px grid">
            <div fxFlex="75%">
                <app-product-list></app-product-list>
            </div>
            <div fxFlex="25%">
                <app-cart></app-cart>
            </div>
        </div>
    `
})
export class ProductOrderingPage {

} 