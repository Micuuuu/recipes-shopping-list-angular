import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel',
      'https://www.allrecipes.com/thmb/01uQCSZZLLO312MBi-e3iqFSz5k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3220117-467b8ee80d1b49e2b7d08817fe0c39d4.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big fat burger',
      'Just awesome',
      'https://www.allrecipes.com/thmb/01uQCSZZLLO312MBi-e3iqFSz5k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3220117-467b8ee80d1b49e2b7d08817fe0c39d4.jpg',
      [new Ingredient('Buns', 1), new Ingredient('Meat', 20)]

    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
