import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupplierReportComponent } from './page-supplier-report.component';

describe('PageSupplierReportComponent', () => {
  let component: PageSupplierReportComponent;
  let fixture: ComponentFixture<PageSupplierReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSupplierReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSupplierReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
