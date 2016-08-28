import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    user: {email: string};

    constructor(private router: Router) { }
    
    isLoggedIn() {
        let result: boolean = !!localStorage.getItem('token');
        return result;
    }


    login(email: string, password: string) {
        // mock
        localStorage.setItem('token', new Date().toISOString());
        localStorage.setItem('user.email', email);
        
        this.router.navigate(['browse']);
    }

    userEmail() {
        return localStorage.getItem('user.email');
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }

}