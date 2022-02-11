import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // This is example of binding to custom properties
  // 'srvElement' is the alias given to the element which is being used in app component.html
  @Input('srvElement') element!: {type:string,name:string,content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
