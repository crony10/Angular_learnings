import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipesListInput') recipes!: Recipe; 

  @Output() recipeItem  = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  // just infroming parent(recipe.list.component) component that click event has occured
  recipeClicked(){
    this.recipeItem.emit();
  }

}
