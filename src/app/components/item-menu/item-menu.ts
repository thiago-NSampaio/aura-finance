import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-item-menu',
  imports: [SvgIconComponent,RouterLink,RouterLinkActive],
  templateUrl: './item-menu.html',
  styleUrl: './item-menu.scss',
})

export class ItemMenu {
  @Input() name = '';
  @Input() srcIcon = '';
  @Input() route = '';
}
