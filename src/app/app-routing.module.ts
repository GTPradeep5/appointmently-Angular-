import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/doctor', pathMatch: 'full' },
  { path: 'doctor', loadChildren: './doctor/doctor.module#RecipesModule' },

  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'calendar',
    component:CalendarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
