import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'text-check',
  templateUrl: './text-check.component.html',
  styleUrls: ['./text-check.component.css']
})
export class TextCheckComponent implements OnInit {

  @Input('input') obj;
  marked: number = 0;
  updated: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  update(event, cb){
    this.updated= true;
    if(event.target.checked){
      this.mark();
    }
    else{
      this.unmark();
    }
  }
  mark(){
    this.marked ++;
  }

  unmark(){
    this.marked --;
  }

}
