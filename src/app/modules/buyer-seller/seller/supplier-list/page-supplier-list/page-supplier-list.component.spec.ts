import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupplierListComponent } from './page-supplier-list.component';

describe('PageSupplierListComponent', () => {
  let component: PageSupplierListComponent;
  let fixture: ComponentFixture<PageSupplierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSupplierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
