import { Component, Input } from '@angular/core';
import { Widget } from "../ui/widget/widget";

export interface ExpenseDay {
  label: string;
  value: number;
}
@Component({
  selector: 'app-widget-spending-analysis',
  imports: [Widget],
  templateUrl: './widget-spending-analysis.html',
  styleUrl: './widget-spending-analysis.scss',
})
export class WidgetSpendingAnalysis {
  @Input({ required: true }) data!: ExpenseDay[];
  selectedDay = 'Qua';
  
  get days() {
    return this.data.map(item => item.label);
  }
}
