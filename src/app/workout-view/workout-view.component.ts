import { Component } from '@angular/core';
import { PoseNetComponent } from '../posenet/posenet.component';
import { WorkoutProgressComponent } from '../workout-progress/workout-progress.component';

@Component({
  selector: 'app-workout-view',
  standalone: true,
  imports: [PoseNetComponent, WorkoutProgressComponent],
  templateUrl: './workout-view.component.html',
  styleUrl: './workout-view.component.scss',
})
export class WorkoutViewComponent {}
