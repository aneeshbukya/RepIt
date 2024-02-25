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
  instruction: string = "";

  constructor(type: ExerciseType, count: number, weight: number) {
    this.type = type;
    this.count = count;
    this.weight = weight;

    switch(type){
      case ExerciseType.CURLS:
        this.instruction = `Do ${count} both arm curls!`;
        break;
      case ExerciseType.PUSH_UPS:
        this.instruction = `Do ${count} push ups!`
        break;
      case ExerciseType.LATERAL_RAISES:
        this.instruction = `Do ${count} lateral raises!`;
        break;
      case ExerciseType.SHOULDER_PRESSES:
        this.instruction = `Do ${count} shoulder presses!`;
        break;
      case ExerciseType.SQUATS:
        this.instruction = `Do ${count} squats!`
        break;
    }
  }
}
