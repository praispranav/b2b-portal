import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFaqAddComponent } from './page-faq-add.component';

describe('PageFaqAddComponent', () => {
  let component: PageFaqAddComponent;
  let fixture: ComponentFixture<PageFaqAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFaqAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFaqAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
