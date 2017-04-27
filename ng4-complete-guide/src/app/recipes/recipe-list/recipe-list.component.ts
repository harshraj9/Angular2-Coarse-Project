import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Halwa', 
    'Halwa is a combination of nuts, milk, sugar, khoya and ghee with grated carrot. It is a light nutritious dessert with less fat (a minimum of 10.03% and an average of 12.19%) than many other typical South Asian desserts.', 
    'https://c1.staticflickr.com/4/3697/10340712324_3aa94db6fe_b.jpg'),
    new Recipe('Pizza', 
    'Pizza is a yeasted flatbread popularly topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments. The term was first recorded in the 10th century, in a Latin manuscript from Gaeta in Central Italy.', 
    'https://upload.wikimedia.org/wikipedia/commons/e/e9/Mom%27s_new_pumpkin_pie_recipe_with_gingersnaps.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
