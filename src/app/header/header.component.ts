import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() recipeFired = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  recipeClicked(pageName:string){
    
    this.recipeFired.emit(pageName);
  }

}
