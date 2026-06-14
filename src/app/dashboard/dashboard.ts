import { Component } from '@angular/core';
import { HeroSection } from "../components/hero-section/hero-section";
import { WidgetExpenses } from "../components/widget-expenses/widget-expenses";
import { Section } from "../components/ui/section/section";
import { WidgetTransactions } from "../components/widget-transactions/widget-transactions";
import { WidgetSavingsGoal } from "../components/widget-savings-goal/widget-savings-goal";
import { WidgetAuraInsights } from "../components/widget-aura-insights/widget-aura-insights";
import { WidgetSpendingAnalysis } from "../components/widget-spending-analysis/widget-spending-analysis";

@Component({
  selector: 'app-dashboard',
  imports: [HeroSection, WidgetExpenses, Section, WidgetTransactions, WidgetSavingsGoal, WidgetAuraInsights, WidgetSpendingAnalysis],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  expenseData = [
  { label: 'Seg', value: 120 },
  { label: 'Ter', value: 90 },
  { label: 'Qua', value: 180 },
  { label: 'Qui', value: 140 },
  { label: 'Sex', value: 220 },
  { label: 'Sab', value: 170 },
  { label: 'Dom', value: 250 },
];
}
