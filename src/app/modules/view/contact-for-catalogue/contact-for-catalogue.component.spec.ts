import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactForCatalogueComponent } from './contact-for-catalogue.component';

describe('ContactForCatalogueComponent', () => {
  let component: ContactForCatalogueComponent;
  let fixture: ComponentFixture<ContactForCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactForCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactForCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
