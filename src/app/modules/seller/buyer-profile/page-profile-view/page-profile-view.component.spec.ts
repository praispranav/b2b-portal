import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfileViewComponent } from './page-profile-view.component';

describe('PageProfileViewComponent', () => {
  let component: PageProfileViewComponent;
  let fixture: ComponentFixture<PageProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
