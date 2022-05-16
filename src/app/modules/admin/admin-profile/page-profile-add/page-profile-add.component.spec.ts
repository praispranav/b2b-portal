import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfileAddComponent } from './page-profile-add.component';

describe('PageProfileAddComponent', () => {
  let component: PageProfileAddComponent;
  let fixture: ComponentFixture<PageProfileAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfileAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
