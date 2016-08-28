import { Component, OnInit } from '@angular/core';
import { ProductComponent }  from './components/product/product.component';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-app',
    templateUrl: 'app/app.component.html',
    directives: [ProductComponent],
    providers: [AuthService]
})
export class AppComponent  {

    constructor(private auth: AuthService,
                private router: Router) { }

    userEmail(): string {
        return this.auth.userEmail();
    }

    isLoggedIn() {
        return this.auth.isLoggedIn();
    }

    logout() {
        this.auth.logout();
    }

}