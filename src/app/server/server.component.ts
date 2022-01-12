import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:[`./server.component.css`]
})
export class ServerComponent{
    serverNumber: number = 10;

    serverStatus: string = 'offline';
    
    fun(){
        var text = 'returned some text';
        return text;
    }
}