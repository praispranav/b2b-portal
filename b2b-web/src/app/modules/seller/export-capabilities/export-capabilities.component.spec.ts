import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCapabilitiesComponent } from './export-capabilities.component';

describe('ExportCapabilitiesComponent', () => {
  let component: ExportCapabilitiesComponent;
  let fixture: ComponentFixture<ExportCapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCapabilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
