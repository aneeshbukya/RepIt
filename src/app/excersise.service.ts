import { Injectable } from '@angular/core';
import { Exercise } from './models/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  exercises: Exercise[] = [];

  setExercises(exercises: Exercise[]) {
    this.exercises = exercises;
  }

  getExercises() {
    return this.exercises;
  }

  removeExercise(exercise: Exercise) {
    let index = this.exercises.indexOf(exercise);

    this.exercises.splice(index, 1);

    return this.exercises;
  }

  decrementCount() {
    const exercise = this.exercises[0];

    exercise.count--;

    if (exercise.count <= 0) {
      this.removeExercise(exercise);
    }
  }
}
