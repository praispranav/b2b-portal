import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueMenubarComponent } from './catalogue-menubar.component';

describe('CatalogueMenubarComponent', () => {
  let component: CatalogueMenubarComponent;
  let fixture: ComponentFixture<CatalogueMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
