import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuyingHelpComponent } from './page-buying-help.component';

describe('PageBuyingHelpComponent', () => {
  let component: PageBuyingHelpComponent;
  let fixture: ComponentFixture<PageBuyingHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBuyingHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBuyingHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
