import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormInputDataArgs } from '../models/form-inputdata-arg';
import { FormReturnDataArgs } from '../models/form-return-data';

@Component({
  selector: 'text-radio',
  templateUrl: './text-radio.component.html',
  styleUrls: ['./text-radio.component.css']
})
export class TextRadioComponent {

  @Input('input') obj : FormInputDataArgs;
  @Output() update = new EventEmitter();

  touched: boolean = false;
  checkedOptionCount: number= 0;
  options : Array<boolean> = new Array<boolean>();
  selectedOptions : Array<string>= new Array();
  returnValue: FormReturnDataArgs;

  constructor() { }

  ngOnInit() {
    this.options.length === 0 ? this.options.length = this.obj.options.length : true ;
    this.resetOptions();
  }

  resetOptions(pos?: number) {
    for (var v = 0; v < this.options.length; v++) {
      this.options[v] = false;
    }
    pos++;
    if (pos) {
      this.selectedOptions.push(this.obj.options[pos-1].value);
      this.options[pos - 2] = true
    }
  }

  onChange(event, pos){
    this.touched = true;
    this.checkedOptionCount = pos;
    this.resetOptions(pos);
    this.returnValue = { type: this.obj.type, id: this.obj.inputProp.id, data: this.selectedOptions };
    this.update.emit(this.returnValue);
  }

}
