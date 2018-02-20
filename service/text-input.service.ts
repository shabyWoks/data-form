import { Injectable } from '@angular/core';

@Injectable()
export class TextInputService {

  private errors:Array<string> = [];

  constructor() { }

  validation(val, minLen, maxLen, notAllowed){
    this.errors= [];
    if(val.length == 0){
      this.errors.push("Enter some value");
    }
    if(val.length < minLen){
      this.errors.push("Value is too short");
    }
    if(val.length > maxLen){
      this.errors.push("Value is too long");
    }
    if(notAllowed){
      var arr = (notAllowed.split(','))
        .map(x => {
          return x.toLocaleUpperCase().trim();
        });
      for (let i of arr) {
        if (val.indexOf(i) >= 0) {
          this.errors.push('Unwanted Character ' + i);
        }
      }
    }
    return this.errors;
  }

}
