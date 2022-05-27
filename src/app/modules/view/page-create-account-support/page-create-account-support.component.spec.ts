import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateAccountSupportComponent } from './page-create-account-support.component';

describe('PageCreateAccountSupportComponent', () => {
  let component: PageCreateAccountSupportComponent;
  let fixture: ComponentFixture<PageCreateAccountSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreateAccountSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreateAccountSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
