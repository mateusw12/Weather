import { AppRoutes } from "./app-route-interface";

export const LOGIN_PATH: AppRoutes = {
  path: '/login',
  onlyPath: 'login',
  pageTitle: 'Login',
  fatherTitle: '',
};

export const USER_REGISTRATION_PATH: AppRoutes = {
  path: '/user-registration',
  onlyPath: 'user-registration',
  pageTitle: 'Cadastro Usuário',
  fatherTitle: '',
};

export const INFORMATIONS_PATH: AppRoutes = {
  path: '/menu/informations',
  onlyPath: 'informations',
  pageTitle: 'Sobre',
  fatherTitle: '',
};