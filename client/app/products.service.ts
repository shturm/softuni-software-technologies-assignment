import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    products: Product[] = [
            {sku: 'w42', name: 'wheel', price:42},
            {sku: 'w43', name: 'wheelster', price: 54},
        ];

    constructor() { }
    
    findProduct(sku: string): Product {
        return this.products.filter((p: Product) =>{return p.sku === sku}).pop();
    }

    getProducts() {
        return this.products;
    }

}