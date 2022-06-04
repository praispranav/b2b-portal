import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellerDocumentWeConsiderComponent } from './page-seller-document-we-consider.component';

describe('PageSellerDocumentWeConsiderComponent', () => {
  let component: PageSellerDocumentWeConsiderComponent;
  let fixture: ComponentFixture<PageSellerDocumentWeConsiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellerDocumentWeConsiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellerDocumentWeConsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
