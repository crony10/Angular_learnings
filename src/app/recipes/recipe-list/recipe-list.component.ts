import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('subway test 1','paneer tikka','https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2016/1-Archana/Paneer_Tikka_Sub_Sandwich_Recipe_Del_Monte_Mayo-5.jpg'),
    new Recipe('subway test 1','paneer tikka','https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2016/1-Archana/Paneer_Tikka_Sub_Sandwich_Recipe_Del_Monte_Mayo-5.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
