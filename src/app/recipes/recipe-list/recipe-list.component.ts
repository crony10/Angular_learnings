import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('paneer tikka','aa to aapdo love che','https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2016/1-Archana/Paneer_Tikka_Sub_Sandwich_Recipe_Del_Monte_Mayo-5.jpg'),
    new Recipe('tofu','every sunday 130 rs.','https://www.subway.com/ns/images/menu/IND/ENG/Tandoori_Tofu_Sub.jpg')
  ]

  @Output() listRecipeItem = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  listElementClicked(item:Recipe){
    this.listRecipeItem.emit(item);
  }
}
