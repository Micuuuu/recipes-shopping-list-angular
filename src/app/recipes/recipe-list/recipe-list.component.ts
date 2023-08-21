import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://www.allrecipes.com/thmb/01uQCSZZLLO312MBi-e3iqFSz5k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3220117-467b8ee80d1b49e2b7d08817fe0c39d4.jpg'),
    new Recipe('A test recipe', 'This is a test', 'https://www.allrecipes.com/thmb/01uQCSZZLLO312MBi-e3iqFSz5k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3220117-467b8ee80d1b49e2b7d08817fe0c39d4.jpg')
  ];
}
