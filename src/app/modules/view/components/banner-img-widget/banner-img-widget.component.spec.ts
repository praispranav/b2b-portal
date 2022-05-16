import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImgWidgetComponent } from './banner-img-widget.component';

describe('BannerImgWidgetComponent', () => {
  let component: BannerImgWidgetComponent;
  let fixture: ComponentFixture<BannerImgWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerImgWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerImgWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
