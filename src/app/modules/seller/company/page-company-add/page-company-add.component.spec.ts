import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompanyAddComponent } from './page-company-add.component';

describe('PageCompanyAddComponent', () => {
  let component: PageCompanyAddComponent;
  let fixture: ComponentFixture<PageCompanyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCompanyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCompanyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
