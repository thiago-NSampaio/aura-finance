import { Component } from '@angular/core';
import { HeroSection } from "../components/hero-section/hero-section";
import { WidgetExpenses } from "../components/widget-expenses/widget-expenses";
import { Section } from "../components/ui/section/section";
import { WidgetTransactions } from "../components/widget-transactions/widget-transactions";

@Component({
  selector: 'app-dashboard',
  imports: [HeroSection, WidgetExpenses, Section, WidgetTransactions],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  
}
