import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosEncuestaComponent } from './pasos-encuesta.component';

describe('PasosEncuestaComponent', () => {
  let component: PasosEncuestaComponent;
  let fixture: ComponentFixture<PasosEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasosEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasosEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
