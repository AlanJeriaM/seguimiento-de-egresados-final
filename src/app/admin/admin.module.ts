import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './modules/menu/menu.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MenuModule } from '../menu/menu.module';
import { MaterialModule } from '../shared/modules/material.module';
import { PrimengModule } from '../shared/modules/primeng.module';
import { ProductService } from 'src/assets/productservice';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    PrimengModule,
    MenuModule,
    FormsModule
  ],
  providers: [
    ProductService,
    MessageService,
    ConfirmationService
  ]
  
  
  

})
export class AdminModule { }
