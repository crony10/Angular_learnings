import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls:['./servers.component.css']
})
export class ServersComponent {
  count = 3;
  buttonClicked = false;
  secretArray: string[] = [];

  
  onClick(){
    this.count++;
    this.secretArray.push('hey crony and nin '+this.count); 
  }
  


}
