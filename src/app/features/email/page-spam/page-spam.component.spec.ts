import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpamComponent } from './page-spam.component';

describe('PageSpamComponent', () => {
  let component: PageSpamComponent;
  let fixture: ComponentFixture<PageSpamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSpamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSpamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
