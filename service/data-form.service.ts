import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataFormService {

  constructor(private http : Http) { }

  submitFormData(postUrl, formData){
    return this.http.post(postUrl, JSON.stringify(formData));
  }

}
