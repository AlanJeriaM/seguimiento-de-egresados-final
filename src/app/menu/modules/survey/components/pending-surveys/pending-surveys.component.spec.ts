import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSurveysComponent } from './pending-surveys.component';

describe('PendingSurveysComponent', () => {
  let component: PendingSurveysComponent;
  let fixture: ComponentFixture<PendingSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
