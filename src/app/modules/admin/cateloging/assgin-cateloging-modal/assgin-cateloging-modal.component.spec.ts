import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssginCatelogingModalComponent } from './assgin-cateloging-modal.component';

describe('AssginCatelogingModalComponent', () => {
  let component: AssginCatelogingModalComponent;
  let fixture: ComponentFixture<AssginCatelogingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssginCatelogingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssginCatelogingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
