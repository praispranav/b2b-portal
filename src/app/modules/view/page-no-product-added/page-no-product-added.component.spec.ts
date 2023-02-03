import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoProductAddedComponent } from './page-no-product-added.component';

describe('PageNoProductAddedComponent', () => {
  let component: PageNoProductAddedComponent;
  let fixture: ComponentFixture<PageNoProductAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoProductAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoProductAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
