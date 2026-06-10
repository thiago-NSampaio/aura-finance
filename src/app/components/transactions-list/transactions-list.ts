import { Component } from '@angular/core';
import { TransactionsListItem } from "../transactions-list-item/transactions-list-item";

@Component({
  selector: 'app-transactions-list',
  imports: [TransactionsListItem],
  templateUrl: './transactions-list.html',
  styleUrl: './transactions-list.scss',
})
export class TransactionsList {

}
