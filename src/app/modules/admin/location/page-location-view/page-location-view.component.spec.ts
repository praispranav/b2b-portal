import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLocationViewComponent } from './page-location-view.component';

describe('PageLocationViewComponent', () => {
  let component: PageLocationViewComponent;
  let fixture: ComponentFixture<PageLocationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLocationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLocationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
