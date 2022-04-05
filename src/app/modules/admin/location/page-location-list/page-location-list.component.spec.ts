import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLocationListComponent } from './page-location-list.component';

describe('PageLocationListComponent', () => {
  let component: PageLocationListComponent;
  let fixture: ComponentFixture<PageLocationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageLocationListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
