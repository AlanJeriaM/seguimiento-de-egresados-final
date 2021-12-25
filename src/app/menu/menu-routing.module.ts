import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { NewSurveyComponent } from './modules/survey/components/new-survey/new-survey.component';
import { CompletedSurveysComponent } from './modules/survey/components/completed-surveys/completed-surveys.component';
import { PendingSurveysComponent } from './modules/survey/components/pending-surveys/pending-surveys.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { GraduateReportsComponent } from './modules/survey/components/graduate-reports/graduate-reports.component';
import { PerfilComponent } from './modules/perfil/perfil.component';


const routes: Routes = [
  /* {
    path: '',
    component: MenuComponent,
    children: [
      {path:'survey', loadChildren: () => import('./modules/survey/survey.module').then(m => m.SurveyModule)},
      {
        path:'reports', loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
      },
      { path: '**', redirectTo: 'survey' },
    ]
  } */
  {
    path: '',
    component: MenuComponent,
    children:[
      {path:'survey', loadChildren: () => import('./modules/survey/survey.module').then(m => m.SurveyModule)},
      {
        path: 'new',
        component: NewSurveyComponent
      },
      {
        path: 'completed',
        component: CompletedSurveysComponent
      },
      {
        path: 'pending',
        component: PendingSurveysComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'reports',
        loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
