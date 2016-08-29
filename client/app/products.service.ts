import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    static products: Product[] = [
            {sku: 'w42', name: 'wheel', price:42},
            {sku: 'w43', name: 'wheelster', price: 54},
        ];

    constructor(private router: Router) { }
    
    findProduct(sku: string): Product {
        return ProductsService.products.filter((p: Product) =>{return p.sku === sku}).pop();
    }

    getProducts() {
        return ProductsService.products;
    }

    createProduct(p: Product) {
        ProductsService.products.push(p);
    }

    updateProduct(p: Product) {
        ProductsService.products.forEach((prod: Product) => {
            if (p.sku === prod.sku) {
                prod = p;
            }
        });
        this.router.navigate(['browse']);
    }

}