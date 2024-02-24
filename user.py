def input_profile():
    print("Welcome to RepIt! Let's set up your profile.")

    age = int(input("Enter your age: "))
    weight = float(input("Enter your weight in kilograms: "))
    height = float(input("Enter your height in centimeters: "))

    print("\nFitness Level:")
    print("1. Beginner")
    print("2. Intermediate")
    print("3. Advanced")
    fitness_level = int(input("Enter your fitness level (1/2/3): "))

    # Mapping fitness levels to descriptive strings
    fitness_levels = {
        1: "Beginner",
        2: "Intermediate",
        3: "Advanced"
    }

    fitness_level_str = fitness_levels.get(fitness_level, "Unknown")

    print("\nFitness Goals:")
    print("1. Lose Weight")
    print("2. Gain Muscle")
    print("3. Overall Fitness")
    # Mapping fitness goals to descriptive strings
    fitness_goal = int(input("Enter your fitness goal (1/2/3): "))
    # Mapping fitness levels to descriptive strings
    fitness_goals = {
        1: "Lose Weight",
        2: "Gain Muscle",
        3: "Overall Fitness"
    }

    fitness_goal_str = fitness_goals.get(fitness_goal, "Unknown")

    # Displaying the collected information
    print("\nProfile Information:")
    print(f"Age: {age} years")
    print(f"Weight: {weight} kg")
    print(f"Height: {height} meters")
    print(f"Fitness Level: {fitness_level_str}")
    print(f"Fitness Goals: {fitness_goal_str}")

    # Return the collected profile information as a dictionary
    return {
        "age": age,
        "weight": weight,
        "height": height,
        "fitness_level": fitness_level_str,
        "fitness goals": fitness_goal_str
    }


# Example usage:
profile_info = input_profile()
print("\nProfile Information Saved Successfully!")
print(profile_info)


def main():
    input_profile()
    main()
