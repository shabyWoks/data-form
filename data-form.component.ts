import { Component, Input } from '@angular/core';
import { FormInputDataArgs } from './models/form-inputdata-arg';
import { FormReturnDataArgs } from './models/form-return-data';

@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {

  @Input('input-parameter') parameter: Array<FormInputDataArgs>= new Array<FormInputDataArgs>();
  
  formData: Array<FormReturnDataArgs>= new Array<FormReturnDataArgs>();
  disabled : boolean = true;

  initilizeFormData(){
    if(this.formData.length === 0){
      this.formData.length= this.parameter.length;
    }
  }

  updateFormData(val : FormReturnDataArgs, pos : number){
    this.initilizeFormData();
    this.formData[pos]= val;
    this.enableButton();
  }

  enableButton(){
    for(var v=0; v<this.formData.length; v++){
      if(!this.formData[v]) return;
    }
    this.disabled = false;
  }

  submit(){
    console.log(this.formData);
  }

  constructor() { }

}
