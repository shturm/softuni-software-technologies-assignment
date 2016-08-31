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

    submitProduct() {
        this.onSubmit.emit(this.product);
        this.product = new Product('',0,'');
    }

    ngOnInit() {
       
    }
}