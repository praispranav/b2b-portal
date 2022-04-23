import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComposeComponent } from './page-compose.component';

describe('PageComposeComponent', () => {
  let component: PageComposeComponent;
  let fixture: ComponentFixture<PageComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
