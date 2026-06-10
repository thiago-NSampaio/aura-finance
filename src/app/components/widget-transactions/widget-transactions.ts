import { Component } from '@angular/core';
import { Widget } from "../ui/widget/widget";
import { TransactionsList } from "../transactions-list/transactions-list";

@Component({
  selector: 'app-widget-transactions',
  imports: [Widget, TransactionsList],
  templateUrl: './widget-transactions.html',
  styleUrl: './widget-transactions.scss',
})
export class WidgetTransactions {

}
