import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandMenu } from './brand-menu';

describe('BrandMenu', () => {
  let component: BrandMenu;
  let fixture: ComponentFixture<BrandMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
