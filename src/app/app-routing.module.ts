import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {
    path: 'products',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'gestion',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/gestion/gestion.module').then(m => m.GestionModule)
  },
  {
    path: 'gestion/:id',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/gestion/gestion.module').then(m => m.GestionModule)
  }
  // {
  //   path: '**',
  //  // loadChildren: () => import('src/app/pages/error-page/error-page.module').then(m => m.ErrorPageModule) //TODO crear error page module
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
