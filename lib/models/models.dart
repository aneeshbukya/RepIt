class Exercise {
  Exercise(
      {required this.type,
      required this.targetCount,
      this.instructions = "",
      this.count = 0});

  final ExerciseType type;

  final String instructions;

  final int targetCount;

  int count;
}

enum ExerciseType { reps, pushups }
