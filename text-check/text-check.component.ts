import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormReturnDataArgs } from '../models/form-return-data';
import { FormInputDataArgs } from '../models/form-inputdata-arg';
import { TextCheckService } from '../service/text-check.service';

@Component({
  selector: 'text-check',
  templateUrl: './text-check.component.html',
  styleUrls: ['./text-check.component.css']
})
export class TextCheckComponent implements OnInit {

  @Input('input') obj : FormInputDataArgs;
  @Output() update= new EventEmitter();

  touched: boolean = false;
  checkedOptionCount: number = 0;
  options : Array<boolean> = new Array<boolean>();
  selectedOptions : Array<string>= new Array();
  returnValue: FormReturnDataArgs;
  
  constructor(private textCheckService : TextCheckService) { }

  ngOnInit() {
    this.options.length === 0 ? this.options.length = this.obj.options.length : true ;
    this.textCheckService.resetOptions(this.options);
  }

  onChange(event, cb, pos) {
    this.touched = true;
    this.options[pos] ? 
      this.selectedOptions = this.textCheckService.removeSelectedOption(pos, this.selectedOptions, this.obj) :
      this.selectedOptions = this.textCheckService.addSelectedOption(pos, this.selectedOptions, this.obj);
    (this.options[pos] = !this.options[pos]) ? this.checkedOptionCount++ : this.checkedOptionCount--;
    this.returnValue = { type: this.obj.type, id: this.obj.inputProp.id, data: this.selectedOptions };
    this.update.emit(this.returnValue);
  }

}
