import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:[`./server.component.css`]
})
export class ServerComponent{
    allowNewServer = false;

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 5000);
    }
}