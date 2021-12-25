import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyScreenComponent } from './screen/survey-screen/survey-screen.component';

const routes: Routes = [
  
  {
    path: '',
    component: SurveyScreenComponent,
    children: [
      {
        path: 'new',
        component: SurveyScreenComponent
      },
      {
        path: 'completed',
        component: SurveyScreenComponent
      },
      {
        path: 'pending',
        component: SurveyScreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
