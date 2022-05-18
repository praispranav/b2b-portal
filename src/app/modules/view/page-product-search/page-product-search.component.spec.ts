import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductSearchComponent } from './page-product-search.component';

describe('PageProductSearchComponent', () => {
  let component: PageProductSearchComponent;
  let fixture: ComponentFixture<PageProductSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
