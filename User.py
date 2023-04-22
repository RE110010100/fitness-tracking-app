class User:
    def __init__(self):
        self.username = ""
        self.user_email = ""
        self.fitness_goal = None
        self.workout_goal = None
        self.nutrition = None
        self.body_measurements = None
    
    def set_name(self, name):
        self.username = name
    
    def set_email(self, email):
        self.user_email = email
    
    def set_fitness_goals(self, fitness_goal):
        self.fitness_goal = fitness_goal
    
    def set_workout_goals(self, workout_goal):
        self.workout_goal = workout_goal
    
    def set_nutrition(self, nutrition):
        self.nutrition = nutrition
    
    def set_body_measurements(self, body_measurements):
        self.body_measurements = body_measurements
    
    def get_name(self):
        return self.username
    
    def get_email(self):
        return self.user_email
    
    def get_fitness_goal(self):
        return self.fitness_goal
    
    def get_workout_goals(self):
        return self.workout_goal
    
    def get_nutrition(self):
        return self.nutrition
    
    def get_body_measurements(self):
        return self.body_measurements
