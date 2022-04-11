import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTermsOfUseComponent } from './page-terms-of-use.component';

describe('PageTermsOfUseComponent', () => {
  let component: PageTermsOfUseComponent;
  let fixture: ComponentFixture<PageTermsOfUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTermsOfUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTermsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
