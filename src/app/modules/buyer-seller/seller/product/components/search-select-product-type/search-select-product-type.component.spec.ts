import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSelectProductTypeComponent } from './search-select-product-type.component';

describe('SearchSelectProductTypeComponent', () => {
  let component: SearchSelectProductTypeComponent;
  let fixture: ComponentFixture<SearchSelectProductTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSelectProductTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSelectProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
