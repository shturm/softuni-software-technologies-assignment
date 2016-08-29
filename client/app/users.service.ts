import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
    static users: {email: string, activated: boolean, admin: boolean}[] = [
        {email: 'gosho@pochivka.com', admin: true, activated: true},
        {email: 'qvkata@dlg.com', admin: false, activated: false},
        {email: 'toncho@gulub.com', admin: false, activated: false},
        {email: 'mirko@cropcop.com', admin: false, activated: true},
    ];

    constructor() { }

    getUsers() {
        return UsersService.users;
    }

    activateUser(email: string) {
        UsersService.users.forEach((u: any) => {
            if (u.email === email) {
                u.activated = true;
            }
        });
    }

}