import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { TextCheckComponent } from './text-check/text-check.component';
import { TextInputService } from './service/text-input.service';
import { TextSelectComponent } from './text-select/text-select.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextCheckService } from './service/text-check.service';
import { TextRadioComponent } from './text-radio/text-radio.component';
import { StatusComponent } from './status/status.component';
import { DataFormService } from './service/data-form.service';

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
    TextSelectComponent,
    TextAreaComponent,
    TextRadioComponent,
    StatusComponent
  ],
  providers: [
    TextInputService,
    TextCheckService,
    DataFormService
  ],
  exports: [
    DataFormComponent
  ]
})
export class DataFormModule { }
