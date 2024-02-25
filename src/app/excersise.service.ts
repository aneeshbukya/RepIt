import { Injectable, EventEmitter } from '@angular/core';
import { Exercise, ExerciseType } from './models/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  exercises: Exercise[] = [];

  newExerciseType: EventEmitter<ExerciseType | null> = new EventEmitter<ExerciseType | null>();

  currentExerciseType: ExerciseType | null = null;

  setExercises(exercises: Exercise[]) {
    this.exercises = exercises;

    this.updateCurrentExerciseType();
  }

  getExercises() {
    return this.exercises;
  }

  updateCurrentExerciseType() {
    const nextType = this.exercises.length > 0 ? this.exercises[0].type : null;

    if (nextType == this.currentExerciseType) return;

    this.currentExerciseType = nextType;

    this.newExerciseType.emit(nextType);
  }

  removeExercise(exercise: Exercise) {
    let index = this.exercises.indexOf(exercise);

    this.exercises.splice(index, 1);

    this.updateCurrentExerciseType();

    return this.exercises;
  }

  decrementCount() {
    const exercise = this.exercises[0];

    exercise.count--;

    if (exercise.count <= 0) {
      this.removeExercise(exercise);
    }
  }

  private startTime: number = 0;
  private endTime: number = 0;

  startTiming(): void {
    this.startTime = Date.now();
  }

  stopTiming(): void {
    this.endTime = Date.now();
  }

  getDurationInSeconds(): number {
    return (this.endTime - this.startTime) / 1000;
  }
}
