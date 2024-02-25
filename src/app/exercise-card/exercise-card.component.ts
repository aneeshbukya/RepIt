import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exercise, ExerciseType } from '../models/exercise';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-exercise-card',
  standalone: true,
  imports: [NgIf, MatButtonModule, CommonModule],
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.scss',
})
export class ExerciseCardComponent implements OnInit {
  @Input() exercise!: Exercise;

  @Input() activeExercise: boolean = false;

  @Output() skipExercise = new EventEmitter<Exercise>();

  exerciseTypes = ExerciseType;

  totalCount = 0;

  ngOnInit(): void {
    this.totalCount = this.exercise.count;
  }

  getImageURL() {
    switch (this.exercise.type) {
      case ExerciseType.PUSH_UPS:
        return 'assets/pushup-icon.png';
      case ExerciseType.CURLS:
        return 'assets/curl-icon.png';
      case ExerciseType.LATERAL_RAISES:
        return 'assets/lateral-icon.png';
      case ExerciseType.SHOULDER_PRESSES:
        return 'assets/shoulder-icon.png';
      case ExerciseType.SQUATS:
        return 'assets/squat-icon.png';
    }

    return "";
  }

  skip() {
    this.skipExercise.emit(this.exercise);
  }

  get progress() {
    return 1 - (this.exercise.count) / this.totalCount;
  }

  decreaseCount() {
    this.exercise.count--;
  }
}
