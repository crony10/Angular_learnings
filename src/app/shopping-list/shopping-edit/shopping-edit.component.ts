import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

//  2nd way of accessing local reference
  @ViewChild('amount') amountInput!:ElementRef;

  // emitting the ingredient 
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }


  onNameInput(nameInput:HTMLInputElement){
    const ingName = nameInput.value;
    const ingAmount = this.amountInput.nativeElement.value;

    // 1st way of accessing local references
    console.log(ingName);

    // 2nd way of accessing local references
    console.log(ingAmount);

    // making a new onject of Ingredient
    const newIngredientObject = new Ingredient(ingName,ingAmount);

    // emitting the object which contains an object of ingrediant
    this.ingredientAdded.emit(newIngredientObject);
  }

}
