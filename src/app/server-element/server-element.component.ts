import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

  // 1st option:emulated and 2nd option:shadowDom both are same and the default behaviour.
  // However, shadowDom uses browser's technology while emulated uses angular's built in technology 
  // 3rd option: none =>which applies the style globally
  // https://angular.io/guide/view-encapsulation
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  // This is example of binding to custom properties
  // 'srvElement' is the alias given to the element which is being used in app component.html
  @Input('srvElement') element: {type:string,name:string,content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
