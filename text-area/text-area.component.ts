import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TextInputService } from '../service/text-input.service';
import { FormInputDataArgs } from '../models/form-inputdata-arg';
import { FormReturnDataArgs } from '../models/form-return-data';

@Component({
  selector: 'text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {

  @Input('input') obj : FormInputDataArgs;
  @Input('min-len') minLen : number;
  @Input('max-len') maxLen : number;
  @Input('not-allowed') notAllowed : string;
  @Output() update = new EventEmitter();

  errors:Array<string> = [];
  returnValue: FormReturnDataArgs;
  returnData: Array<string> = new Array();

  constructor(private textInputService : TextInputService) { }

  onChange(value){
    this.errors = [];
    this.errors = this.textInputService.validation(value, this.minLen, this.maxLen, this.notAllowed);
    this.returnData.pop();
    this.returnData.push(value);
    this.returnValue= { type : this.obj.type, id : this.obj.inputProp.id, data : this.returnData }; 
    this.update.emit(this.returnValue);
  }

}
