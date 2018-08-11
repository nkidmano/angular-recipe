import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Frenze pizza with chinese shit',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    ),
    new Recipe(
      'Meatball',
      'Meatball with spagetthi',
      'https://images-gmi-pmc.edge-generalmills.com/05d6e7b7-f677-4845-89d2-7e965c2d9538.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
