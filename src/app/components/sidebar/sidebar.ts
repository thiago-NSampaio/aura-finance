import { Component } from '@angular/core';
import { BrandMenu } from "../brand-menu/brand-menu";
import { Navbar } from "../navbar/navbar";
import { SvgIconComponent } from 'angular-svg-icon';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  imports: [BrandMenu, Navbar,SvgIconComponent, NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    console.log(route)
    console.log(this.router.url)
    console.log(this.router.url === route)

    return this.router.url === route;
  }
}
