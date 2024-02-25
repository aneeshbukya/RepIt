import { Component } from '@angular/core';
import { VideoContainerComponent } from '../video-container/video-container.component';
import { WorkoutProgressComponent } from '../workout-progress/workout-progress.component';

@Component({
  selector: 'app-workout-view',
  standalone: true,
  imports: [VideoContainerComponent, WorkoutProgressComponent],
  templateUrl: './workout-view.component.html',
  styleUrl: './workout-view.component.scss',
})
export class WorkoutViewComponent {}
