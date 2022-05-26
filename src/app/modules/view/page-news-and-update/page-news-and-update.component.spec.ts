import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewsAndUpdateComponent } from './page-news-and-update.component';

describe('PageNewsAndUpdateComponent', () => {
  let component: PageNewsAndUpdateComponent;
  let fixture: ComponentFixture<PageNewsAndUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewsAndUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewsAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
