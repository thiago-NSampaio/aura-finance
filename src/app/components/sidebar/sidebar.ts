import { Component } from '@angular/core';
import { BrandMenu } from "../brand-menu/brand-menu";
import { Navbar } from "../navbar/navbar";
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar',
  imports: [BrandMenu, Navbar,SvgIconComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

}
