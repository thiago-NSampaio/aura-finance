import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

type CategoryConfig = {
  icon: string;
  bgClass: string;
};

@Component({
  selector: 'app-transactions-list-item',
  imports: [SvgIconComponent],
  templateUrl: './transactions-list-item.html',
  styleUrl: './transactions-list-item.scss',
})
export class TransactionsListItem {
  @Input({ required: true }) category!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) date!: string;
  @Input({ required: true }) value!: number;

  readonly categories: Record<string, CategoryConfig> = {
    food: {
      icon: 'food.svg',
      bgClass: '#ADC6FF10',
    },
    salary: {
      icon: 'salary.svg',
      bgClass: '#4EDEA310',
    },
    electronics: {
      icon: 'electronics.svg',
      bgClass: '#DDB7FF10',
    },
    transport: {
      icon: 'transport.svg',
      bgClass: '#ADC6FF10',
    },
  };

  get categoryConfig(): CategoryConfig {
    return (
      this.categories[this.category] ?? {
        icon: 'default.png',
        backgroundColor: '#F3F4F6',
      }
    );
  }
}
