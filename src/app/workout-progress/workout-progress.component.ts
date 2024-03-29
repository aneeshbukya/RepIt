import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExerciseCardComponent } from '../exercise-card/exercise-card.component';
import { ExerciseService } from '../excersise.service';
import { Exercise, ExerciseType } from '../models/exercise';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workout-progress',
  standalone: true,
  imports: [ExerciseCardComponent, CommonModule, MatButtonModule, RouterModule],
  templateUrl: './workout-progress.component.html',
  styleUrl: './workout-progress.component.scss',
})
export class WorkoutProgressComponent implements OnInit, OnDestroy {
  exercises: Exercise[] = [];


  constructor(private exerciseService: ExerciseService) {
    this.exercises = exerciseService.getExercises();
  }

  ngOnInit(): void {
    this.exerciseService.startTiming();
  }

  ngOnDestroy(): void {
    this.exerciseService.stopTiming();
  }

  skipExercise(exercise: Exercise) {
    this.exerciseService.removeExercise(exercise);
  }

  test() {
    this.exerciseService.decrementCount();
  }
}
