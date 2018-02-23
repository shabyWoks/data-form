import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormReturnDataArgs } from '../models/form-return-data';

@Injectable()
export class DataFormService {

  constructor(private http : Http) { }

  // submitFormData(postUrl: string, formData: Array<FormReturnDataArgs>){
  //   return this.http.post(postUrl, JSON.stringify(formData));
  // }

}
