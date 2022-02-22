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
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
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
  @ViewChild('heading',{static:true}) heading: ElementRef;
  @ContentChild('paragraph',{static:true}) paragraph: ElementRef;

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
    
    // you can't take the content using ViewChild of any particular element before that view is rendered 
    // Like here it gives undefined
    console.log("heading content: " + this.heading.nativeElement.textContent);

    // This is the method of referecncing if the data is in the component part : @ContentChild we can't use @ViewChild because the paragraph which we want to target is in the content part of app component html.
    // However we can only use after the content is rendered just like @ViewChild above
    console.log("paragraph content: "+ this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck called!")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
    console.log("paragraph content: "+ this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentInit called!")
  }
  ngAfterViewInit() {

    // after the view has been rendered you can access the content using ViewChild decorater
    console.log("heading content: " + this.heading.nativeElement.textContent);
    console.log("ngAfterViewInit called!")
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called")
  }

}
