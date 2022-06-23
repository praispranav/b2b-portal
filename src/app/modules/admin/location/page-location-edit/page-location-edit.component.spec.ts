import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLocationEditComponent } from './page-location-edit.component';

describe('PageLocationEditComponent', () => {
  let component: PageLocationEditComponent;
  let fixture: ComponentFixture<PageLocationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLocationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLocationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
