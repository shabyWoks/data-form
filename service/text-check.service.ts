import { Injectable } from '@angular/core';
import { FormInputDataArgs } from '../models/form-inputdata-arg';

@Injectable()
export class TextCheckService {

  constructor() { }

  resetOptions(options : Array<boolean>){
    for(var v=0; v<options.length; v++){
      options[v]= false;
    }
    return options;
  }

  addSelectedOption(index : number, selectedOptions : Array<string>, obj : FormInputDataArgs) {
    selectedOptions.push(obj.options[index].value);
    return selectedOptions;
  }

  removeSelectedOption(index : number, selectedOptions : Array<string>, obj : FormInputDataArgs) {
    let val = obj.options[index].value;
    for (var v = 0; v < selectedOptions.length; v++) {
      if (selectedOptions[v] === val) {
        selectedOptions.splice(v, 1);
      }
    }
    return selectedOptions;
  }

}
