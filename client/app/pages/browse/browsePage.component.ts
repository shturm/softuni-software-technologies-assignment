import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../product.model';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    providers: [ProductsService],
    selector: 'app-browsePage',
    templateUrl: 'browsePage.component.html',
    styles: ['tr {cursor: pointer}']

})
export class BrowsePageComponent implements OnInit {
    products: Product[] = [];

    constructor(private productsService: ProductsService,
                private router: Router) {
        this.products = productsService.getProducts();
     }

    gotoProduct(sku: string) {
        this.router.navigate(['browse', sku]);
    }
    ngOnInit() { }

}