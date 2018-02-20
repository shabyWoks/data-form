import { NgModule } from '@angular/core';
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DataFormComponent,
    TextInputComponent,
    TextCheckComponent,
    FileUploadComponent,
    TextSelectComponent,
    TextAreaComponent
  ],
  providers: [
    TextInputService,
    FileUploadService
  ],
  exports: [
    DataFormComponent
  ]
})
export class DataFormModule { }