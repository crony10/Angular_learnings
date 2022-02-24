import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  recipe!: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  // adding the recipe item(which came from recipe) into item variable
  addingRecipe(item:Recipe){
    this.recipe = item;
  }


}
