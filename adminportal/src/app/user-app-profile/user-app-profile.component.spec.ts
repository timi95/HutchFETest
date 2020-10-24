import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppProfileComponent } from './user-app-profile.component';

describe('UserAppProfileComponent', () => {
  let component: UserAppProfileComponent;
  let fixture: ComponentFixture<UserAppProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAppProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAppProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
