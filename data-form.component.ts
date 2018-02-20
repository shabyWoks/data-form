import { Component, Input } from '@angular/core';

@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {

  @Input('input-parameter') parameter;

  // textbox, checkbox, radio, textarea, dropdown
  /*
  [
    {
      type : ,
      labelName : ,
      placeHolder : ,
      inputProp : { 
        type: ,
        id: ,
        rowSize: 
      },
      options : [],
      inline : ,
      validationText : ,
      inValidationText : ,
      mandatory: 
    }
  ]
  */

  constructor() { }

}
