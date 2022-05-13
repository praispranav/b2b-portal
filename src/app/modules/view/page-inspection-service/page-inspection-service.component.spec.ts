import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInspectionServiceComponent } from './page-inspection-service.component';

describe('PageInspectionServiceComponent', () => {
  let component: PageInspectionServiceComponent;
  let fixture: ComponentFixture<PageInspectionServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInspectionServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInspectionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
