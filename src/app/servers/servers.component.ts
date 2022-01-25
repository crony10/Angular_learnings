import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls:['./servers.component.css']
})
export class ServersComponent {
  count = 3;
  buttonClicked = false;
  secretArray: number[] = [];

  
  onClick(){
    // this.count++;
    // this.buttonClicked = !this.buttonClicked;
    this.secretArray.push(this.secretArray.length +1); 
  }

  // getColor(){
  //   if(this.secretArray.length>=5){
  //     return 'blue';
  //   }
  //   return 'transparent'; 
  // }
  


}
