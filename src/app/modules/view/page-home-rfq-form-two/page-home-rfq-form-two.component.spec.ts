import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeRfqFormTwoComponent } from './page-home-rfq-form-two.component';

describe('PageHomeRfqFormTwoComponent', () => {
  let component: PageHomeRfqFormTwoComponent;
  let fixture: ComponentFixture<PageHomeRfqFormTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeRfqFormTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeRfqFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
