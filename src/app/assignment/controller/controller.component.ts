import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  @Output() countData = new EventEmitter<number>();

  count = 0;
  interval: any;
  constructor() { }

  ngOnInit(): void {
  }

  startNumber(){
    this.interval = setInterval(()=>{
      this.count++;
      // console.log(this.count);
      this.countData.emit(this.count);
    },500);

  }
  stopNumber(){
    clearInterval(this.interval);
  }

}
