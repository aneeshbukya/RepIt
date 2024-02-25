export enum ExerciseType { 
  CURLS = 'Curls',
  PUSH_UPS = 'Push ups',
  LATERAL_RAISES = 'Lateral raises',
  SHOULDER_PRESSES = 'Shoulder presses',
  SQUATS = 'Squats'
};

export class Exercise {
  type: ExerciseType;
  count: number;
  weight: number;

  constructor(type: ExerciseType, count: number, weight: number) {
    this.type = type;
    this.count = count;
    this.weight = weight;
  }
}
