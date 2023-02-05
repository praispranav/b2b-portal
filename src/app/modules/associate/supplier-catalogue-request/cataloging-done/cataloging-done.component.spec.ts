import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogingDoneComponent } from './cataloging-done.component';

describe('CatalogingDoneComponent', () => {
  let component: CatalogingDoneComponent;
  let fixture: ComponentFixture<CatalogingDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogingDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogingDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
