import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResearchAndDevelopmentComponent } from './form-research-and-development.component';

describe('FormResearchAndDevelopmentComponent', () => {
  let component: FormResearchAndDevelopmentComponent;
  let fixture: ComponentFixture<FormResearchAndDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormResearchAndDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResearchAndDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
