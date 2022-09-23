import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactSalesComponent } from './page-contact-sales.component';

describe('PageContactSalesComponent', () => {
  let component: PageContactSalesComponent;
  let fixture: ComponentFixture<PageContactSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContactSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
