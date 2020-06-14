import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './doctor.component';
import { RecipeListComponent } from './doctor-list/doctor-list.component';
import { RecipeStartComponent } from './doctor-start/doctor-start.component';
import { RecipeEditComponent } from './doctor-edit/doctor-edit.component';
import { RecipesRoutingModule } from './doctor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecipeDetailComponent } from './doctor-details/doctor-detail.component';
import { RecipeItemComponent } from './doctor-list/doctor.item/doctor-item.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}
