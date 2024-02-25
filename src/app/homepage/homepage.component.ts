import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Exercise, ExerciseType } from '../models/exercise';

@Component({
  standalone: true,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  imports:[FormsModule]
})
export class HomepageComponent {
  age!: number;
  weight!: number;
  height!: number;
  fitnessLevel!: string;
  fitnessGoal!: string;

  saveProfile(): void {
    // Display the collected information
    console.log("Profile Information:");
    console.log(`Age: ${this.age} years`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Height: ${this.height} cm`);
    console.log(`Fitness Level: ${this.fitnessLevel}`);
    console.log(`Fitness Goal: ${this.fitnessGoal}`);

  }
 
  // Example usage:
   exercises: ExerciseType[] = [
    ExerciseType.SQUATS,
    ExerciseType.CURLS,
    ExerciseType.LATERAL_RAISES,
    ExerciseType.PUSH_UPS,
    ExerciseType.SHOULDER_PRESSES,
  ];
  storeWorkouts(workouts: Exercise[], weightToLift: number, repCount: number): Exercise[] {
    this.exercises.forEach(exercise => {
      for (let i = 0; i < 3; i++) {
        if (this.age>55){
          workouts.push(new Exercise(exercise,repCount,weightToLift-5));
        }else{
          workouts.push(new Exercise(exercise,repCount,weightToLift));
        }
      }
    });
    return workouts; 
  }

  recommendWorkout(): Exercise[] {
    let workouts: Exercise[] = [];  
    // Check age
    if (this.age < 14) {
      return workouts; // No workout for age less than 14
    }

    // Adjust weight based on age
    let defaultWeight = 20;

    // Determine weight based on fitness goal and level
    let weightToLift: number;
    let repCount: number ; 
    if (this.fitnessGoal === 'Lose Weight') {
      repCount = 12; 
      if (this.fitnessLevel === 'Beginner') {
        weightToLift = 10; // Lift 10 lb for beginners aiming to lose weight
        workouts = this.storeWorkouts(workouts,repCount,weightToLift);
      } else if (this.fitnessLevel === 'Intermediate'){
        weightToLift = 30; // Lift 30 lb for Intermediate aiming to lose weight
        workouts = this.storeWorkouts(workouts,repCount,weightToLift);
      } else if (this.fitnessLevel === 'Advanced'){
        weightToLift = 40; // Lift 40 lb for Advanced aiming to lose weight
        workouts = this.storeWorkouts(workouts,repCount,weightToLift);
      }
    } else if (this.fitnessGoal === 'Gain Muscle'){
      repCount = 8; 
      if (this.fitnessLevel === 'Beginner') {
        weightToLift = 20; // Lift 20 lb for beginners aiming to lose weight
        workouts = this.storeWorkouts(workouts,repCount,weightToLift);
      } else if (this.fitnessLevel === 'Intermediate'){
        weightToLift = 40; // Lift 40 lb for Intermediate aiming to lose weight
        workouts = this.storeWorkouts(workouts,repCount,weightToLift);
      } else if (this.fitnessLevel === 'Advanced'){
        weightToLift = 60; // Lift 60 lb for Advanced aiming to lose weight
        workouts = this.storeWorkouts(workouts,repCount,weightToLift);
      }
    } else{ // overall fitness
      repCount = 10; 
      if (this.fitnessLevel === 'Beginner') {
        weightToLift = 20; // Lift 20 lb for beginners aiming to lose weight
        workouts = this.storeWorkouts(workouts,repCount,weightToLift);
      } else if (this.fitnessLevel === 'Intermediate'){
        weightToLift = 40; // Lift 40 lb for Intermediate aiming to lose weight
        workouts = this.storeWorkouts(workouts,repCount,weightToLift);
      } else if (this.fitnessLevel === 'Advanced'){
        weightToLift = 60; // Lift 60 lb for Advanced aiming to lose weight
        workouts = this.storeWorkouts(workouts,repCount,weightToLift);
      }
    } 
    return workouts;
  }
  
}