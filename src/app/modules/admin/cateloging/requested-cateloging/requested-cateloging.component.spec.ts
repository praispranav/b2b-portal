import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedCatelogingComponent } from './requested-cateloging.component';

describe('RequestedCatelogingComponent', () => {
  let component: RequestedCatelogingComponent;
  let fixture: ComponentFixture<RequestedCatelogingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedCatelogingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedCatelogingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
