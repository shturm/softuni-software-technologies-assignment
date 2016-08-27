import { Component } from '@angular/core';
import { ProductComponent }  from './product.component';

@Component({
    selector: 'ddk-app',
    templateUrl: 'app/app.component.html',
    directives: [ProductComponent]
})
export class AppComponent { }
