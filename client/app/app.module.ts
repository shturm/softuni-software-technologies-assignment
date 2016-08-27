import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductComponent }  from './components/product/product.component';

import { routing } from './app.routes';
import { NewProductPageComponent } from './pages/newProduct/newProductPage.component';
import { BrowsePageComponent } from './pages/browse/browsePage.component';
import { LoginPageComponent } from './pages/login/loginPage.component';
import { RegisterPageComponent } from './pages/register/registerPage.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing],
  declarations: [ 
    // main
    AppComponent,
    
    // reusable components
    ProductComponent,
    
    // page components
    NewProductPageComponent,
    BrowsePageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }