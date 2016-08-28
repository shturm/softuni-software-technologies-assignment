import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
import { AuthService} from '../../auth.service';

@Component({
    selector: 'app-loginPage',
    templateUrl: 'app/pages/login/loginPage.component.html',
    directives: []
})
export class LoginPageComponent { 

    constructor(private auth: AuthService) {
       
    }
    
    logIn(credentials: any) {
        console.log(credentials);
        this.auth.login(credentials.email, credentials.password);
    }
}
