import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin/authentication/admin-login/admin-login.component';
import { RegistroLoginComponent } from './admin/authentication/registro-login/registro-login.component';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'admin-login',
    component:AdminLoginComponent
  },
  {
    path: 'admin-login/registro',
    component:RegistroLoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
