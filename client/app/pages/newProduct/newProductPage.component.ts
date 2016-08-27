import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../product.model';

@Component({
    selector: 'app-newProductPage',
    templateUrl: 'app/pages/newProduct/newProductPage.component.html',
    directives: [ProductComponent]
})
export class NewProductPageComponent { 
    product: Product = new Product('',0,'');
}
