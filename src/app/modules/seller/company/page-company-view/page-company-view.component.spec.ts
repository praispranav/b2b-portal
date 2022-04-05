import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompanyViewComponent } from './page-company-view.component';

describe('PageCompanyViewComponent', () => {
  let component: PageCompanyViewComponent;
  let fixture: ComponentFixture<PageCompanyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCompanyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCompanyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
