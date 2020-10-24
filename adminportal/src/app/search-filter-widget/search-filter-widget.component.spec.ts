import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterWidgetComponent } from './search-filter-widget.component';

describe('SearchFilterWidgetComponent', () => {
  let component: SearchFilterWidgetComponent;
  let fixture: ComponentFixture<SearchFilterWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
