import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:[`./server.component.css`]
})
export class ServerComponent{
    serverStatus = 'offline';

    constructor(){
        setInterval(() => {
            this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
        }, 500);
    }
    
    getColor(){
        return this.serverStatus === 'offline' ? 'red' : 'blue';
    }
}