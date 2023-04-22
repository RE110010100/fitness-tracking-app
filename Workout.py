class Workout:
    def __init__(self, exercise_type, sets, repetitions, intensity, calories_burned):
        self.exercise_type = exercise_type
        self.sets = sets
        self.repetitions = repetitions
        self.intensity = intensity
        self.calories_burned = calories_burned
    
    def setExerciseType(self, exercise_type):
        self.exercise_type = exercise_type
    
    def getExerciseType(self):
        return self.exercise_type
    
    def getSets(self):
        return self.sets
    
    def setSets(self, sets):
        self.sets = sets
    
    def getRepetitions(self):
        return self.repetitions
    
    def setRepetitions(self, repetitions):
        self.repetitions = repetitions
    
    def getIntensity(self):
        return self.intensity
    
    def setIntensity(self, intensity):
        self.intensity = intensity
    
    def recalibrateWorkoutMetrics(self):
        self.sets, self.repetitions = self.intensity.calculate_intensity(self.sets,self.repetitions)

    def getCalories(self):
        return self.calories_burned
    
    def setCalories(self, calories_burned):
        self.calories_burned = calories_burned
