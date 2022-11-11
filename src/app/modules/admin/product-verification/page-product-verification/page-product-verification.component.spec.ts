import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductVerificationComponent } from './page-product-verification.component';

describe('PageProductVerificationComponent', () => {
  let component: PageProductVerificationComponent;
  let fixture: ComponentFixture<PageProductVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
