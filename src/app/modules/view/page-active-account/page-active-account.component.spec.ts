import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActiveAccountComponent } from './page-active-account.component';

describe('PageActiveAccountComponent', () => {
  let component: PageActiveAccountComponent;
  let fixture: ComponentFixture<PageActiveAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageActiveAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActiveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
