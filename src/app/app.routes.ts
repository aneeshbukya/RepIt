import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkoutViewComponent } from './workout-view/workout-view.component';
import { WorkoutResultsComponent } from './workout-results/workout-results.component';

export const routes: Routes = [
  { path: "", redirectTo: "/start", pathMatch: "full"},
  { path: "start", component: HomepageComponent},
  { path: "workout", component: WorkoutViewComponent},
  { path: "finish", component: WorkoutResultsComponent}
];
