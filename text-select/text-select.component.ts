import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormInputDataArgs } from '../models/form-inputdata-arg';
import { Options } from '../models/options';
import { FormReturnDataArgs } from '../models/form-return-data';

@Component({
  selector: 'text-select',
  templateUrl: './text-select.component.html',
  styleUrls: ['./text-select.component.css']
})
export class TextSelectComponent implements OnInit {

  @Input('input') obj : FormInputDataArgs;
  @Output() update = new EventEmitter();

  constructor() { }

  touched: boolean= false;
  selectedOptionCount: number= 0;
  options : Array<boolean> = new Array<boolean>();
  selectedOptions : Array<string>= new Array();
  returnValue: FormReturnDataArgs;

  ngOnInit() {
    this.options.length === 0 ? this.options.length = this.obj.options.length : true ;
    this.resetOptions();
  }

  resetOptions(pos?: number) {
    for (var v = 0; v < this.options.length; v++) {
      this.options[v] = false;
    }
    if (pos) {
      this.selectedOptions.push(this.obj.options[pos-1].value);
      this.options[pos - 1] = true
    }
  }

  change(event:any) {
    this.touched = true;
    this.selectedOptionCount = event.target.selectedOptions[0].index;
    this.resetOptions(event.target.selectedOptions[0].index);
    this.returnValue = { type: this.obj.type, id: this.obj.inputProp.id, data: this.selectedOptions };
    this.update.emit(this.returnValue);
  }

}
