import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeFlashDealsComponent } from './page-home-flash-deals.component';

describe('PageHomeFlashDealsComponent', () => {
  let component: PageHomeFlashDealsComponent;
  let fixture: ComponentFixture<PageHomeFlashDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeFlashDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeFlashDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
