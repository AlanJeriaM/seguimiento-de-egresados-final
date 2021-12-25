import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { ReportManagementComponent } from './components/report-management/report-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { SurveyManagementComponent } from './components/survey-management/survey-management.component';
import { GraduateReportsManagementComponent } from './components/graduate-reports-management/graduate-reports-management.component';
import { MenuComponent } from './menu.component';
import { MenuScreenComponent } from './screens/menu-screen/menu-screen.component';
import { AdminModule } from '../../admin.module';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';
import { ProductService } from 'src/assets/productservice';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Paso1Component } from './components/pasos-encuesta/paso1/paso1.component';
import { Paso2Component } from './components/pasos-encuesta/paso2/paso2.component';
import { Paso3Component } from './components/pasos-encuesta/paso3/paso3.component';
import { PasosEncuestaComponent } from './components/pasos-encuesta/pasos-encuesta.component';
import { PasosEncuestaModule } from './components/pasos-encuesta/pasos-encuesta.module';


const components: any[] = [
  
  MenuComponent,
  GraduateReportsManagementComponent,
  ReportManagementComponent,
  SurveyManagementComponent,
  UserManagementComponent,
  PasosEncuestaComponent
];
const screens: any[] = [
  MenuScreenComponent
];

@NgModule({
  declarations: [
    ...components,
    ...screens,
    
  
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    PasosEncuestaModule
  ],
  exports: [
    ...components
  ],
  providers: [
    ProductService,
    MessageService,
    ConfirmationService
  ]
})
export class MenuModule { }
