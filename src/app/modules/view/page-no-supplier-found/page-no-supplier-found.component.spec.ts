import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoSupplierFoundComponent } from './page-no-supplier-found.component';

describe('PageNoSupplierFoundComponent', () => {
  let component: PageNoSupplierFoundComponent;
  let fixture: ComponentFixture<PageNoSupplierFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoSupplierFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoSupplierFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
