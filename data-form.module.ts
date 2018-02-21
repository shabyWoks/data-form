import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { TextCheckComponent } from './text-check/text-check.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TextInputService } from './service/text-input.service';
import { FileUploadService } from './service/file-upload.service';
import { TextSelectComponent } from './text-select/text-select.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextCheckService } from './service/text-check.service';
import { TextRadioComponent } from './text-radio/text-radio.component';
import { StatusComponent } from './status/status.component';
import { DataFormService } from './service/data-form.service';
import { Options } from './models/options';
import { FormInputDataArgs } from './models/form-inputdata-arg';
import { FormReturnDataArgs } from './models/form-return-data';
import { InputPropArgs } from './models/input-prop';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    DataFormComponent,
    TextInputComponent,
    TextCheckComponent,
    FileUploadComponent,
    TextSelectComponent,
    TextAreaComponent,
    TextRadioComponent,
    StatusComponent
  ],
  providers: [
    TextInputService,
    FileUploadService,
    TextCheckService,
    DataFormService
  ],
  exports: [
    DataFormComponent,
    Options,
    FormInputDataArgs,
    FormReturnDataArgs,
    InputPropArgs
  ]
})
export class DataFormModule { }
