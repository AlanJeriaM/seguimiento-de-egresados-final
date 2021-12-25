import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateReportsManagementComponent } from './graduate-reports-management.component';

describe('GraduateReportsManagementComponent', () => {
  let component: GraduateReportsManagementComponent;
  let fixture: ComponentFixture<GraduateReportsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduateReportsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduateReportsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
