import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product.model';
@Component({
    selector: 'app-product',
    templateUrl: 'app/components/product/product.component.html'
})
export class ProductComponent implements OnInit{
    @Input()
    product: Product;

    ngOnInit() {
       
    }
}
