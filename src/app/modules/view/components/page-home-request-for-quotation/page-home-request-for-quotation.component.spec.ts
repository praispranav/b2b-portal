import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeRequestForQuotationComponent } from './page-home-request-for-quotation.component';

describe('PageHomeRequestForQuotationComponent', () => {
  let component: PageHomeRequestForQuotationComponent;
  let fixture: ComponentFixture<PageHomeRequestForQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeRequestForQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeRequestForQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
