import { Component } from '@angular/core';
import { ItemMenu } from "../item-menu/item-menu";

@Component({
  selector: 'app-navbar',
  imports: [ ItemMenu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar {
  menuItems = [
  {
    name: 'Dashboard',
    icon: 'icons/dashboard.svg',
    route: '/dashboard',
  },
  {
    name: 'Assistente de Voz',
    icon: 'icons/voice.svg',
    route: '/voice',
  },
  {
    name: 'Transações',
    icon: 'icons/wallet.svg',
    route: '/transactions',
  },
  {
    name: 'Insights',
    icon: 'icons/profits-sidebar.svg',
    route: '/insights',
  },
  {
    name: 'Configurações',
    icon: 'icons/settings.svg',
    route: '/settings',
  },
];
}
