import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AuthenticateUserComponent } from './authenticate-user/authenticate-user.component';
import { LogoutUserComponent } from './logout-user/logout-user.component';

const routes: Routes = [
  { path: 'create', component: CreateProductComponent },
   { path: '', component: ListProductsComponent },
   { path: 'movie/:id', component: ListProductsComponent },
   { path: 'edit/:id', component: EditProductComponent},
   { path: 'delete/:id', component: DeleteProductComponent},
   { path: 'login', component: AuthenticateUserComponent},
   { path: 'logout', component: LogoutUserComponent}
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
