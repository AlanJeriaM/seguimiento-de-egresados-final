import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyScreenComponent } from './survey-screen.component';

describe('SurveyScreenComponent', () => {
  let component: SurveyScreenComponent;
  let fixture: ComponentFixture<SurveyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
