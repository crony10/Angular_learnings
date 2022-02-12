import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() onServerCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  @Output('bpCreated') onBlueprintCreated =  new EventEmitter<{serverName:string,serverContent:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  // newServerName = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  /* remember type of this local reference that is:  HTMLInputElement */
  /* don't try change the value of the element using this kind of approach */
  onAddServer(serverNameInput:HTMLInputElement){
    this.onServerCreated.emit({

      /* 1st way of accessing local reference */
      serverName:serverNameInput.value,

      /* 2nd way of accessing local reference */
      serverContent:this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(serverNameInput:HTMLInputElement,){
    this.onBlueprintCreated.emit({
      serverName:serverNameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }
  
}
