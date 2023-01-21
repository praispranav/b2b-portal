import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFlaggedComponent } from './page-flagged.component';

describe('PageFlaggedComponent', () => {
  let component: PageFlaggedComponent;
  let fixture: ComponentFixture<PageFlaggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFlaggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFlaggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
