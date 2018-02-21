import { Injectable } from '@angular/core';
import { Options } from '../models/options';
import { FormInputDataArgs } from '../models/form-inputdata-arg';

@Injectable()
export class TextSelectService {

  constructor() { }

  resetOptions(options: Array<boolean>, selectedOptions: Array<string>, obj: FormInputDataArgs, pos?: number) {
    for (var v = 0; v < options.length; v++) {
      options[v] = false;
    }
    if (pos) {
      selectedOptions.push(obj.options[pos].key);
      options[pos - 1] = true
    }
  }

}
