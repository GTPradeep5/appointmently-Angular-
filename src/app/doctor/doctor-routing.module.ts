import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './doctor.component';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeStartComponent } from './doctor-start/doctor-start.component';
import { RecipeEditComponent } from './doctor-edit/doctor-edit.component';
import { RecipesResolverService } from './doctor-resolver.service';
import { RecipeDetailComponent } from './doctor-details/doctor-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
