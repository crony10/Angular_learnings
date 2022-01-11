import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
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
