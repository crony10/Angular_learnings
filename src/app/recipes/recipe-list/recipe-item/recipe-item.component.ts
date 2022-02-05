import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test 1','test desc','https://media.timeout.com/images/105757031/750/422/image.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
