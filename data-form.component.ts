import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormInputDataArgs } from './models/form-inputdata-arg';
import { FormReturnDataArgs } from './models/form-return-data';
import { Http } from '@angular/http';
import { DataFormService } from './service/data-form.service';

@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {

  @Input('input-parameter') parameter: Array<FormInputDataArgs>= new Array<FormInputDataArgs>();
  @Input('post-url') postUrl : string;
  @Output() getFormData= new EventEmitter();
  
  formData: Array<FormReturnDataArgs>= new Array<FormReturnDataArgs>();
  disabled : boolean = true;
  toggleValue = "collapse";
  status = false;
  statusText = "";

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
    if(this.getFormData){
      this.getFormData.emit(this.formData);
    }
    if(this.postUrl){
      this.dataFormService.submitFormData(this.postUrl, this.formData)
      .subscribe(response => {
        this.status= true;
        this.toggleValue = "collapse.show";
        this.statusText = "Action Successful.";
      },
      error => {
        this.status= false;
        this.toggleValue = "collapse.show";
        this.statusText = error;
      });
    }
    
  }

  constructor(private http: Http,
    private dataFormService: DataFormService) { }


}
