import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

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
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

  // This is example of binding to custom properties
  // 'srvElement' is the alias given to the element which is being used in app component.html
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
    // This is to log the previous value 
    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   let cur  = JSON.stringify(chng.currentValue);
    //   let prev = JSON.stringify(chng.previousValue);
    //   console.log("current is : "+cur);
    //   console.log("previous is : "+prev);
    // }


  }

  ngOnInit(): void {
    console.log("ngOnInit called!")
  }

  ngDoCheck() {
    console.log("ngDoCheck called!")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentInit called!")
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called!")
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called")
  }

}
