import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedPageName = 'recipe'
  title = 'crony-app';
  name = 'su chale che';

  // This function adds the page name which came from the respective component which is either recipe or shoppingList
  onNavigate(pageName:string){
    this.loadedPageName = pageName; 
  }
}
