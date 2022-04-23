import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComplainListComponent } from './page-complain-list.component';

describe('PageComplainListComponent', () => {
  let component: PageComplainListComponent;
  let fixture: ComponentFixture<PageComplainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComplainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComplainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
