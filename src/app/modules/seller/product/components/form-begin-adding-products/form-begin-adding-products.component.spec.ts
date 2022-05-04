import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBeginAddingProductsComponent } from './form-begin-adding-products.component';

describe('FormBeginAddingProductsComponent', () => {
  let component: FormBeginAddingProductsComponent;
  let fixture: ComponentFixture<FormBeginAddingProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBeginAddingProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBeginAddingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
