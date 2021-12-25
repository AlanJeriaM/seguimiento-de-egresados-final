import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PRIMENG
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {StepsModule} from 'primeng/steps';



const modules: any[] = [
    ButtonModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    StepsModule,

]

@NgModule({
    declarations: [
    ],
    imports: [
      CommonModule,
      ...modules
    ],
    exports: [
      ...modules
    ]
  })
  export class PrimengModule { }