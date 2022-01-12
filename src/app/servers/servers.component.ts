import { Component, OnInit } from '@angular/core';

@Component({
  // this selector is selected by the element
  selector: 'app-servers',

  // this selector is selected by the attribute
  // selector: '[app-servers]',

  // this selector  is selected by the class
  // selector: '.app-servers',

  template: `
  <p>Servers component called</p>
  <app-server></app-server>
  <app-server></app-server>`,
  styles: [`
  p{
    color: blue;
  }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// just for temporary commit