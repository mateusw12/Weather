import { Routes } from '@angular/router';
import { MenuComponent } from '@module/pages/menu';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  {
    path: 'menu',
    component: MenuComponent,
    data: { pageTitle: 'Menu', breadcrumb: 'Menu' },
    // canActivate: [AuthGuardsService],
    // canActivateChild: [AuthGuardsService],
    children: [],
  },
];
