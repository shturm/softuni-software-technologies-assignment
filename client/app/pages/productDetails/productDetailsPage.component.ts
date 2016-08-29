import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth.service';

import {ProductComponent} from '../../components/product/product.component';
import { Product} from '../../product.model';
import { ProductsService} from '../../products.service';

@Component({
    moduleId: module.id,
    templateUrl: 'productDetailsPage.component.html',
    directives: [ProductComponent],
    providers: [ProductsService]
})
export class ProductDetailsPageComponent implements OnInit {
    sku: string;
    product: Product;

    constructor(private route: ActivatedRoute, private auth: AuthService, private productsService: ProductsService) {    }

    ngOnInit() {
        // let sku = this.route.params._value.sku;
        // this.product = this.productsService.findProduct(sku);
        this.route.params.forEach((params: Params) => {
            let sku = params['sku'];
            this.product = this.productsService.findProduct(sku);
        });

    }

    userIsAdmin() {
        return this.auth.isAdmin();
    }

}
