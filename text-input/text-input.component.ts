import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TextInputService } from '../service/text-input.service';
import { FormReturnDataArgs } from '../models/form-return-data';
import { FormInputDataArgs } from '../models/form-inputdata-arg';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {

  @Input('input') obj : FormInputDataArgs;
  @Input('min-len') minLen : number;
  @Input('max-len') maxLen : number;
  @Input('not-allowed') notAllowed : string;
  @Output() update= new EventEmitter();

  errors:Array<string> = [];
  returnValue: FormReturnDataArgs;
  returnData : Array<string>= new Array();

  constructor(private textInputService : TextInputService) { }
  
  onChange(value){
    this.errors = [];
    this.errors = this.textInputService.validation(value, this.minLen, this.maxLen, this.notAllowed);
    this.returnData.pop();
    this.returnData.push(value)
    this.returnValue= { type : this.obj.type, id : this.obj.inputProp.id, data : this.returnData }; 
    this.update.emit(this.returnValue);
  }

}
