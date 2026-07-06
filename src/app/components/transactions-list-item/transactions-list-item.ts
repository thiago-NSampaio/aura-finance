import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import {categories} from '../../utils/categories';
import { CategoryConfig } from '../../types/category-config';

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

  get categoryConfig(): CategoryConfig {
    return (
      categories[this.category] ?? {
        icon: 'default.png',
        backgroundColor: '#F3F4F6',
      }
    );
  }
}
