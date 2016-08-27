import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';


@Component({
    selector: 'app-newProductPage',
    templateUrl: 'app/pages/newProduct/newProductPage.component.html',
    directives: [ProductComponent]
})
export class NewProductPageComponent { }
