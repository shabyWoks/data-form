import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'text-select',
  templateUrl: './text-select.component.html',
  styleUrls: ['./text-select.component.css']
})
export class TextSelectComponent implements OnInit {

  @Input('input') obj;
  constructor() { }

  touched: boolean= false;
  selectedOptionIndex: number= 0;

  ngOnInit() {
  }

  change(event){
    this.touched= true;
    this.selectedOptionIndex = event.target.selectedOptions[0].index;
  }

}
