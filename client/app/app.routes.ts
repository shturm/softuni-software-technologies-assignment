import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { NewProductPageComponent }      from './pages/newProduct/newProductPage.component';
import { BrowsePageComponent }      from './pages/browse/browsePage.component';
import { ProfilePageComponent } from './pages/profile/profilePage.component';
import { RegisterPageComponent } from './pages/register/registerPage.component';
import { LoginPageComponent } from './pages/login/loginPage.component';
import { ProductDetailsPageComponent } from './pages/productDetails/productDetailsPage.component';

const appRoutes: Routes = [
    {path: 'browse', component: BrowsePageComponent, canActivate: [AuthGuard]  },
    {path: 'new', component: NewProductPageComponent, canActivate: [AuthGuard]  },
    {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]  },
    {path: 'register', component: RegisterPageComponent },
    {path: 'login', component: LoginPageComponent },
    {path: '', component: BrowsePageComponent, canActivate: [AuthGuard] },
    {path: 'browse/:sku', component: ProductDetailsPageComponent, canActivate: [AuthGuard]}
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
