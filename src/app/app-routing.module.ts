import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layouts/layout.component';

const routes: Routes = [
  { path: '',  component: LayoutComponent, loadChildren: () => import('./products/product.module').then(m => m.ProductModule)},
  { path: 'auth',  component: LayoutComponent, loadChildren: () => import('./core/auth/authentication.module').then(m => m.AuthenticationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
