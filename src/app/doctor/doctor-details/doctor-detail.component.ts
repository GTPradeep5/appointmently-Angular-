import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../doctor.model';
import { RecipeService } from '../doctor.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  patient: boolean;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private ds : DataStorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
    this.ds.patient.subscribe(res => {this.patient=res})

  }



  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    if(this.patient)
    {
      alert("You are not a doctor");
    }else{
      this.recipeService.deleteRecipe(this.id);
    }
    this.router.navigate(['/doctor']);
  }

}
