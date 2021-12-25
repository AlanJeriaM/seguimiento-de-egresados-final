import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { ReportsScreenComponent } from './screen/reports-screen/reports-screen.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children:[
      {
        path: 'barra',
        component: ReportsScreenComponent
      },
      {
        path: 'barra-doble',
        component: ReportsScreenComponent
      },
      {
        path: 'dona',
        component: ReportsScreenComponent
      },
      {
        path: 'dona-http',
        component: ReportsScreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
