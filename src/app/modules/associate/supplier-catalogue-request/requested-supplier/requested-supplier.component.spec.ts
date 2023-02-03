import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedSupplierComponent } from './requested-supplier.component';

describe('RequestedSupplierComponent', () => {
  let component: RequestedSupplierComponent;
  let fixture: ComponentFixture<RequestedSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
