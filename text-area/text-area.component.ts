import { Component, OnInit, Input } from '@angular/core';
import { TextInputService } from '../service/text-input.service';

@Component({
  selector: 'text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  @Input('input') obj;
  @Input('min-len') minLen : number;
  @Input('max-len') maxLen : number;
  @Input('not-allowed') notAllowed : string;

  errors:Array<string> = [];

  constructor(private textInputService : TextInputService) { }

  validate(value){
    this.errors = [];
    this.errors = this.textInputService.validation(value, this.minLen, this.maxLen, this.notAllowed);
  }
  ngOnInit() {
  }

}
