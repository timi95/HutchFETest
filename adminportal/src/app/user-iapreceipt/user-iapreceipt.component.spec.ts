import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIAPReceiptComponent } from './user-iapreceipt.component';

describe('UserIAPReceiptComponent', () => {
  let component: UserIAPReceiptComponent;
  let fixture: ComponentFixture<UserIAPReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIAPReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIAPReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
