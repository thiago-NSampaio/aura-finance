import { Component } from '@angular/core';
import { Sidebar } from "../components/sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { Header } from "../components/header/header";

@Component({
  selector: 'app-layout',
  imports: [Sidebar, RouterOutlet, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
