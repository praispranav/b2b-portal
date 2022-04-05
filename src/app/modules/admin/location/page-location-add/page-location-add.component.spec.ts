import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLocationAddComponent } from './page-location-add.component';

describe('PageLocationAddComponent', () => {
  let component: PageLocationAddComponent;
  let fixture: ComponentFixture<PageLocationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageLocationAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLocationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
