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
    path: 'informations',
    data: { pageTitle: 'Sobre' },
    loadChildren: pages.information,
  },
  {
    path: 'settings',
    data: { pageTitle: 'Configuração' },
    loadChildren: pages.setting,
  },
  {
    path: 'news',
    data: { pageTitle: 'Notícias' },
    loadChildren: pages.news,
  },
  {
    path: 'weather-forecast-registration',
    data: { pageTitle: 'Previsão de Tempo' },
    loadChildren: pages.weatherForecastRegistration,
  },
  {
    path: 'menu',
    component: MenuComponent,
    data: { pageTitle: 'Menu', breadcrumb: 'Menu' },
  },
];
