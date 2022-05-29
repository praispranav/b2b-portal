import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAskSupportForServicePartnerComponent } from './page-ask-support-for-service-partner.component';

describe('PageAskSupportForServicePartnerComponent', () => {
  let component: PageAskSupportForServicePartnerComponent;
  let fixture: ComponentFixture<PageAskSupportForServicePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAskSupportForServicePartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAskSupportForServicePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
