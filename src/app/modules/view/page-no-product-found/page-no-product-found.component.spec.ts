import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoProductFoundComponent } from './page-no-product-found.component';

describe('PageNoProductFoundComponent', () => {
  let component: PageNoProductFoundComponent;
  let fixture: ComponentFixture<PageNoProductFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoProductFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoProductFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
