import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsListItem } from './transactions-list-item';

describe('TransactionsListItem', () => {
  let component: TransactionsListItem;
  let fixture: ComponentFixture<TransactionsListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
