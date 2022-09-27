import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBeABartnersComponent } from './page-be-a-bartners.component';

describe('PageBeABartnersComponent', () => {
  let component: PageBeABartnersComponent;
  let fixture: ComponentFixture<PageBeABartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBeABartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBeABartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
