import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompanyEditComponent } from './page-company-edit.component';

describe('PageCompanyEditComponent', () => {
  let component: PageCompanyEditComponent;
  let fixture: ComponentFixture<PageCompanyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCompanyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCompanyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
