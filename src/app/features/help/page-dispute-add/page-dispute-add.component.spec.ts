import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisputeAddComponent } from './page-dispute-add.component';

describe('PageDisputeAddComponent', () => {
  let component: PageDisputeAddComponent;
  let fixture: ComponentFixture<PageDisputeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDisputeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisputeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
