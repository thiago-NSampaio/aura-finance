import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Layout } from './layout/layout';

export const routes: Routes = [
    {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: 'login',
    component: Login
  }
];
