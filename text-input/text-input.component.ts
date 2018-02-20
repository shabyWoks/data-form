import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TextInputService } from '../service/text-input.service';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input('input') obj;
  @Input('min-len') minLen : number;
  @Input('max-len') maxLen : number;
  @Input('not-allowed') notAllowed : string;

  errors:Array<string> = [];
  constructor(private textInputService : TextInputService) { }
  
  update(event){
    this.errors = [];
    this.errors = this.textInputService.validation(event, this.minLen, this.maxLen, this.notAllowed);
  }

  ngOnInit() {
  }

}
