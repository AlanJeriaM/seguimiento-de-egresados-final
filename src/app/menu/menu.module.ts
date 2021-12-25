import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MaterialModule } from '../shared/modules/material.module';
import { ReportsComponent } from './modules/reports/reports.component';
import { SurveyModule } from './modules/survey/survey.module';
import { PerfilComponent } from './modules/perfil/perfil.component';


@NgModule({
  declarations: [
    MenuComponent,
    ReportsComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    SurveyModule
  ]
})
export class MenuModule { }
