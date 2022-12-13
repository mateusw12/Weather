import { Routes } from '@angular/router';
import { MenuComponent } from '@module/pages/menu';
import { AuthGuardsService } from '@module/utils/http';
import * as pages from './pages';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  {
    path: 'login',
    data: { pageTitle: 'Login' },
    loadChildren: pages.login,
  },
  {
    path: 'user-registration',
    data: { pageTitle: 'Cadastro de Usuário' },
    loadChildren: pages.userRegistration,
  },
  {
    path: 'menu',
    component: MenuComponent,
    data: { pageTitle: 'Menu', breadcrumb: 'Menu' },
    // canActivate: [AuthGuardsService],
    // canActivateChild: [AuthGuardsService],
    children: [],
  },
];
