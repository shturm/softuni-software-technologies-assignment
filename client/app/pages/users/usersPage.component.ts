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

    setUserActive(email: string, flag: boolean) {
        let msg = 'Activate user ?';
        if (!flag) msg = 'Deactivate user ?';
        if (confirm(msg)) {
            this.usersService.setUserActive(email, flag);
        }

        this.users = this.usersService.getUsers();
    }

    setUserAdmin(email: string, flag: boolean) {
        let msg: string = 'Promote user to admin ?';
        if (!flag) msg = 'Demote user from admin ?';

        if (confirm(msg)) {
            this.usersService.setUserAdmin(email, flag);
        }
        
        this.users = this.usersService.getUsers();
    }

}