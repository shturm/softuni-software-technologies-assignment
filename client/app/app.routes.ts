import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProductPageComponent }      from './pages/newProduct/newProductPage.component';
import { BrowsePageComponent }      from './pages/browse/browsePage.component';
import { ProfilePageComponent } from './pages/profile/profilePage.component';
import { RegisterPageComponent } from './pages/register/registerPage.component';
import { LoginPageComponent } from './pages/login/loginPage.component';

const appRoutes: Routes = [
    {
        path: 'browse',
        component: BrowsePageComponent
    },
    {
        path: 'new',
        component: NewProductPageComponent
    },
    {
        path: 'profile',
        component: ProfilePageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: '', 
        component: BrowsePageComponent
    }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
