import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePatnerComponent } from './page-patner.component';

describe('PagePatnerComponent', () => {
  let component: PagePatnerComponent;
  let fixture: ComponentFixture<PagePatnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePatnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePatnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
