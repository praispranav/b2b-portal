import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellerReportCheckComponent } from './page-seller-report-check.component';

describe('PageSellerReportCheckComponent', () => {
  let component: PageSellerReportCheckComponent;
  let fixture: ComponentFixture<PageSellerReportCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellerReportCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellerReportCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
