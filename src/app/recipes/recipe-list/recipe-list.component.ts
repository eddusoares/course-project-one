import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Chicken Breast', 'Chicken breasts are a great way to make your own chicken.', 
    'https://www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2-800x1200.jpg'),
  ];
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
