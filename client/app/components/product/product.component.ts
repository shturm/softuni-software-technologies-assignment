import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../product.model';
@Component({
    selector: 'app-product',
    templateUrl: 'app/components/product/product.component.html'
})
export class ProductComponent implements OnInit{
    @Input()
    product: Product;

    @Input()
    editable: boolean = true;
    
    @Output()
    onSubmit = new EventEmitter<Product>();

    submitProduct(product: Product) {
        this.onSubmit.emit(product);
        this.product = new Product('',0,'');
    }

    ngOnInit() {
       
    }
}