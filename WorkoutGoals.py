from DashboardMenu import DashboardMenu

class WorkoutGoals(DashboardMenu):
    def __init__(self):
        super().__init__("WorkoutGoals")
        self.exercises = []
        self.workoutType = ""
    
    def addWorkout(self, exercise):
        self.exercises.append(exercise)
    
    def removeWorkout(self, exercise):
        self.exercises.remove(exercise)
    
    def modifyWorkout(self, exercise):
        index = self.exercises.index(exercise)
        self.exercises[index] = exercise
    
    def retrieveWorkouts(self):
        return self.exercises
    
    def share(self):
        print("Sharing workout goals...")
