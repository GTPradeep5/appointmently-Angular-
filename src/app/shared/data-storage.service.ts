import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from '../doctor/doctor.model';
import { RecipeService } from '../doctor/doctor.service';
import { AuthService } from '../auth/auth.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  cascade = new Subject<boolean>();
  patient = new Subject<boolean>();

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://appointment-8ea61.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://appointment-8ea61.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
