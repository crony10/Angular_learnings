import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenCountNumbers :number[] = [];
  oddCountNumbers:number[] = [];

  // catching up the count number coming from controller
  intervalFired(count:number){
    console.log("in app component:"+count);

    // segregating count in odd and even and adding them into an array of numbers
    if(count%2===0){
      this.evenCountNumbers.push(count);
    }
    else{
      this.oddCountNumbers.push(count);
    }
  }
}
