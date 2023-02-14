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
    'https://cdn-icons-png.flaticon.com/512/2005/2005938.png'),
    new Recipe('Chicken Breast', 'Chicken breasts are a great way to make your own chicken.', 
    'https://cdn-icons-png.flaticon.com/512/2005/2005938.png'),
  ];
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
