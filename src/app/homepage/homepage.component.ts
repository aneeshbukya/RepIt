import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
}