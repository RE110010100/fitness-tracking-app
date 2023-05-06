from DashboardMenu import DashboardMenu

# BodyMeasurements class is a subclass of DashboardMenu class and it is used to store the user's body measurements
class BodyMeasurements(DashboardMenu):
    def __init__(self):
        super().__init__("BodyMeasurements")
        self.weight = 0
        self.body_fat_percentage = 0
        self.muscle_mass = 0
        self.BMI = 0
    
    def setWeight(self, weight):
        self.weight = weight
    
    def setBodyFatPercentage(self, body_fat_percentage):
        self.body_fat_percentage = body_fat_percentage
    
    def setMuscleMass(self, muscle_mass):
        self.muscle_mass = muscle_mass
    
    def setBMI(self, BMI):
        self.BMI = BMI
    
    def getWeight(self):
        return self.weight
    
    def getBodyFatPercentage(self):
        return self.body_fat_percentage
    
    def getMuscleMass(self):
        return self.muscle_mass
    
    def getBMI(self):
        return self.BMI
    
    def share(self):
        print("My weight is ", self.weight, "kg, my body fat percentage is ", self.body_fat_percentage, 
              "%, my muscle mass is ", self.muscle_mass, "kg, and my BMI is ", self.BMI)
