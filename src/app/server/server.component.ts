import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:[`./server.component.css`]
})
export class ServerComponent{
    allowNewServer = false;
    serverCreationStatus = 'Server is not created yet';
    serverName =  'server initial';
    serverCreated = false;

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    onCreateServer(){
        this.serverCreated = true;
        this.serverCreationStatus = 'Server is created and name of the server is ' + this.serverName + ' wohooooooo';
    }

    onUpdateServer(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}