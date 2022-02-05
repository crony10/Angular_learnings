import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('marchu',1),
    new Ingredient('marchu',2),
    new Ingredient('marchu',3)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
