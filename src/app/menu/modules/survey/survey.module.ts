import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { CompletedSurveysComponent } from './components/completed-surveys/completed-surveys.component';
import { GraduateReportsComponent } from './components/graduate-reports/graduate-reports.component';
import { NewSurveyComponent } from './components/new-survey/new-survey.component';
import { PendingSurveysComponent } from './components/pending-surveys/pending-surveys.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SurveyScreenComponent } from './screen/survey-screen/survey-screen.component';
import { SurveyComponent } from './survey.component';


const components: any[] = [
  SurveyComponent,
  CompletedSurveysComponent,
  GraduateReportsComponent,
  NewSurveyComponent,
  PendingSurveysComponent,
  SurveyScreenComponent
];
const screens: any[] = [
  SurveyScreenComponent
];

@NgModule({
  declarations: [
    ...components,
    ...screens
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    MaterialModule
  ],
  exports: [
    ...components
  ]
})
export class SurveyModule { }
