import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsScreenComponent } from './screen/reports-screen/reports-screen.component';
import { BarraComponent } from './components/barra/barra.component';
import { BarraDobleComponent } from './components/barra-doble/barra-doble.component';
import { DonaComponent } from './components/dona/dona.component';
import { DonaHttpComponent } from './components/dona-http/dona-http.component';
import { ReportsComponent } from './reports.component';
import { MaterialModule } from '../../../shared/modules/material.module';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';

const components: any[] = [
  BarraComponent,
  BarraDobleComponent,
  DonaComponent,
  DonaHttpComponent,
  
];
const screens: any[] = [
  ReportsScreenComponent
];

@NgModule({
  declarations: [
    ...components,
    ...screens,
    GraficaBarraComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MaterialModule,
    NgChartsModule
  ]
})
export class ReportsModule { }
