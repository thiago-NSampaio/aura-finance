import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Layout } from './layout/layout';
import { VoiceAssistant } from './voice-assistant/voice-assistant';

export const routes: Routes = [
    {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'voice-assistant',
        component: VoiceAssistant,
      },
    ],
  },
  {
    path: 'login',
    component: Login
  }
];
