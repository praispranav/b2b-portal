import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupplierBackgroundSearchComponent } from './page-supplier-background-search.component';

describe('PageSupplierBackgroundSearchComponent', () => {
  let component: PageSupplierBackgroundSearchComponent;
  let fixture: ComponentFixture<PageSupplierBackgroundSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSupplierBackgroundSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSupplierBackgroundSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
