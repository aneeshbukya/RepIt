import { Component } from '@angular/core';

import { ExerciseService } from '../excersise.service';

@Component({
  selector: 'app-workout-results',
  standalone: true,
  imports: [],
  templateUrl: './workout-results.component.html',
  styleUrl: './workout-results.component.scss'
})
export class WorkoutResultsComponent {
  duration: string = '0';

  constructor(private exerciseService: ExerciseService) {}
  ngOnInit(): void {
    this.duration = this.formatDuration(this.exerciseService.getDurationInSeconds());
  }

  formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    // Pad the minutes and seconds with leading zeros if needed
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  
}
