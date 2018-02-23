import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor() { }

  @Input('toggle-value')toggleValue : string= "collapse";
  @Input('status')status : boolean = true;
  @Input('status-text')statusText : string= "";

  ngOnInit() {
  }

  onClick(val:string){
    this.toggleValue = val;
  }

}
