import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuScreenComponent } from './screens/menu-screen/menu-screen.component';
import { MenuComponent } from './menu.component';
import { GraduateReportsManagementComponent } from './components/graduate-reports-management/graduate-reports-management.component';
import { ReportsComponent } from '../../../menu/modules/reports/reports.component';
import { SurveyManagementComponent } from './components/survey-management/survey-management.component';
import { ReportManagementComponent } from './components/report-management/report-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { Paso1Component } from './components/pasos-encuesta/paso1/paso1.component';
import { Paso2Component } from './components/pasos-encuesta/paso2/paso2.component';
import { Paso3Component } from './components/pasos-encuesta/paso3/paso3.component';
import { PasosEncuestaComponent } from './components/pasos-encuesta/pasos-encuesta.component';

const routes: Routes = [
  /* {
    path: '',
    component: MenuScreenComponent,
    children: [
      {
        path: 'graduate-reports',
        component: MenuScreenComponent
      },
      {
        path: 'reports',
        component: MenuScreenComponent
      },
      {
        path: 'survey',
        component: MenuScreenComponent
      },
      {
        path: 'user',
        component: MenuScreenComponent
      },

    ]
  } */
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'graduate-reports',
        component: GraduateReportsManagementComponent
      },
      {
        path: 'reports',
        component: ReportManagementComponent
      },
      {
        path: 'survey',
        component: SurveyManagementComponent,
        
      },
      {
        path: 'users',
        component: UserManagementComponent
      },
      {
        path: 'pasos-encuesta',
        loadChildren: () => import('./components/pasos-encuesta/pasos-encuesta.module').then(m => m.PasosEncuestaModule)
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
