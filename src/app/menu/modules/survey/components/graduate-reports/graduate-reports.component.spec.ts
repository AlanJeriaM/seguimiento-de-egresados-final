import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateReportsComponent } from './graduate-reports.component';

describe('GraduateReportsComponent', () => {
  let component: GraduateReportsComponent;
  let fixture: ComponentFixture<GraduateReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduateReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduateReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
