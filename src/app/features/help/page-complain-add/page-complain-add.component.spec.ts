import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComplainAddComponent } from './page-complain-add.component';

describe('PageComplainAddComponent', () => {
  let component: PageComplainAddComponent;
  let fixture: ComponentFixture<PageComplainAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComplainAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComplainAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
