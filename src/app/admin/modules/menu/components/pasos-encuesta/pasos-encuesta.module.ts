import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasosEncuestaRoutingModule } from './pasos-encuesta-routing.module';
import { Paso1Component } from './paso1/paso1.component';
import { Paso2Component } from './paso2/paso2.component';
import { Paso3Component } from './paso3/paso3.component';

const components: any[] = [
    Paso1Component,
    Paso2Component,
    Paso3Component
]

@NgModule({
    declarations:[
        ...components
    ],
    imports:[
        CommonModule,
        PasosEncuestaRoutingModule,
    ]
})
export class PasosEncuestaModule {}