import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-registerPage',
    templateUrl: 'app/pages/register/registerPage.component.html',
    directives: []
})
export class RegisterPageComponent {
    errorMessage: string;

    constructor(private auth: AuthService) {

    }

    register(credentials: any) {
        if (credentials.password !== credentials.repeatPassword) {
            this.errorMessage = "Passwords don't match";
            return;
        }

        this.auth.register(credentials.email, credentials.password);
    }
}
