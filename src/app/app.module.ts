import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayProductComponent } from './display-product/display-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AuthenticateUserComponent } from './authenticate-user/authenticate-user.component';
import { LogoutUserComponent } from './logout-user/logout-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ListProductsComponent,
    EditProductComponent,
    DisplayProductComponent,
    DeleteProductComponent,
    AuthenticateUserComponent,
    LogoutUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
