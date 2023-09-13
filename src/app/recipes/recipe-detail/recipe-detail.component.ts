import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {

  @Input() selectedRecipe!:Recipe;

  constructor(private slService: ShoppingListService){

  }
  onAddToShoppingList(){
    this.slService.addRecipeIngredients(this.selectedRecipe.ingredients)
  }
}
