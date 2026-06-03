import { Component } from '@angular/core';
import { HeroSection } from "../components/hero-section/hero-section";
import { WidgetExpenses } from "../components/widget-expenses/widget-expenses";

@Component({
  selector: 'app-dashboard',
  imports: [HeroSection, WidgetExpenses],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  
}
