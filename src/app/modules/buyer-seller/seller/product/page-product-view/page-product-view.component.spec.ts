import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductViewComponent } from './page-product-view.component';

describe('PageProductViewComponent', () => {
  let component: PageProductViewComponent;
  let fixture: ComponentFixture<PageProductViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
