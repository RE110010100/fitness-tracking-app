class DashboardMenuFactory:
    def getMenuInstance(self, menu_type):
        if menu_type == "BodyMeasurements"
            return BodyMeasurements()
        elif menu_type == "FitnessGoal"
            return FitnessGoal()
        elif menu_type == "Nutrition"
            return Nutrition()
        elif menu_type == "WorkoutGoals"
            return WorkoutGoals()
        