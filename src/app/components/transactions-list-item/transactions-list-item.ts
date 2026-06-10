import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-transactions-list-item',
  imports: [SvgIconComponent],
  templateUrl: './transactions-list-item.html',
  styleUrl: './transactions-list-item.scss',
})
export class TransactionsListItem {
  @Input() category = '';
  @Input() description = '';
  @Input() date = '';
  @Input() value:number = 0;
}
