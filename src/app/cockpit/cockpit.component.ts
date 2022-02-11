import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // This both PROPERTIES will be our event emitters
  @Output() onServerCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  // we can set alias name for it same like we did in custom property binding
  @Output('bpCreated') onBlueprintCreated =  new EventEmitter<{serverName:string,serverContent:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  newServerName = '';
  newServerContent = '';

  onAddServer(){
    this.onServerCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }

  onAddBlueprint(){
    this.onBlueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }
  
}
