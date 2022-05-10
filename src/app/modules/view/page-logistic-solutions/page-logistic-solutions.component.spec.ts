import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLogisticSolutionsComponent } from './page-logistic-solutions.component';

describe('PageLogisticSolutionsComponent', () => {
  let component: PageLogisticSolutionsComponent;
  let fixture: ComponentFixture<PageLogisticSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLogisticSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLogisticSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
