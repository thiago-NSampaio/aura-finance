import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequest } from './user-request';

describe('UserRequest', () => {
  let component: UserRequest;
  let fixture: ComponentFixture<UserRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
