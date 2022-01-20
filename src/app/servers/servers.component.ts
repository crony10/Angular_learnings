import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: [`./servers.component.css`]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
    serverCreationStatus = 'Server is not created yet';
    serverName =  'server initial';
    serverCreated = false;
    servers = ['server 1','server 2'];
    

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    onCreateServer(){
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server is created and name of the server is ' + this.serverName + ' wohooooooo';
    }

    onUpdateServer(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

  ngOnInit(): void {
  }

}
