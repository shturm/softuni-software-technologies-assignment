import { Component } from '@angular/core';
import { ProductComponent }  from './components/product/product.component';

@Component({
    selector: 'app-app',
    templateUrl: 'app/app.component.html',
    directives: [ProductComponent]
})
export class AppComponent { }
