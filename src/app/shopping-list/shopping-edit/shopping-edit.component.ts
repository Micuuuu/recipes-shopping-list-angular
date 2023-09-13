import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}
  addItem() {
    const name = this.nameInput.nativeElement.value
    const amount = this.amountInput.nativeElement.value
    const newIngredient = new Ingredient(name, amount)
    this.shoppingListService.addItem(newIngredient);
  }
}
