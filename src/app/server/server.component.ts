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
    serverName =  '';

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    onCreateServer(){
        this.serverCreationStatus = 'Server is created wohooooooo';
    }

    onUpdateServer(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}