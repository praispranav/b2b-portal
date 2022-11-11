import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminMqrComponent } from './page-admin-mqr.component';

describe('PageAdminMqrComponent', () => {
  let component: PageAdminMqrComponent;
  let fixture: ComponentFixture<PageAdminMqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminMqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminMqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
