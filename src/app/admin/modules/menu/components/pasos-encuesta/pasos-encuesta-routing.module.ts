import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PasosEncuestaComponent } from './pasos-encuesta.component';
import { Paso1Component } from './paso1/paso1.component';
import { Paso2Component } from './paso2/paso2.component';
import { Paso3Component } from './paso3/paso3.component';

const routes: Routes = [
    {
        path: '',
        component: PasosEncuestaComponent,
        children: [
            {
                path: '',
                redirectTo: 'paso1',
                pathMatch: 'full'
            },
            {
                path: 'paso1',
                component: Paso1Component
            },
            {
                path: 'paso2',
                component: Paso2Component
            },
            {
                path: 'paso3',
                component: Paso3Component
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PasosEncuestaRoutingModule { }