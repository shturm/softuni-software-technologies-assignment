import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    static products: Product[] = [
            {sku: 'w42', name: 'wheel', price:42},
            {sku: 'w43', name: 'wheelster', price: 54},
        ];

    constructor() { }
    
    findProduct(sku: string): Product {
        return ProductsService.products.filter((p: Product) =>{return p.sku === sku}).pop();
    }

    getProducts() {
        return ProductsService.products;
    }

    createProduct(p: Product) {
        ProductsService.products.push(p);
    }

}