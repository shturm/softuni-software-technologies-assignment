import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../product.model';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    providers: [ProductsService],
    selector: 'app-browsePage',
    templateUrl: 'browsePage.component.html',
    styles: ['tr {cursor: pointer}']

})
export class BrowsePageComponent implements OnInit {
    products: Product[] = [];
    searchTerm: string;

    constructor(private productsService: ProductsService,
                private router: Router,
                private route: ActivatedRoute) {
        productsService.getProducts().subscribe(products => {
            this.products = products;
        });
     }

    gotoProduct(sku: string) {
        this.router.navigate(['browse', sku]);
    }

    ngOnInit() {
         this.route.params.forEach((params: Params) => {
            this.searchTerm = params['term'];
            this.productsService.getProducts(this.searchTerm).subscribe(products => {
                this.products = products;
            });
         });
    }

}