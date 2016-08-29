import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../users.service';

@Component({
    moduleId: module.id,
    templateUrl: 'usersPage.component.html',
    providers: [UsersService]
})
export class UsersPageComponent implements OnInit {
    users: Array<any>;
    
    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.users = this.usersService.getUsers();
     }

    activateUser(email: string) {
        this.usersService.activateUser(email);
        this.users = this.usersService.getUsers();
    }

}