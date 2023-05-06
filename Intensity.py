# In this file, the IntensityStrategy class is defined. This class is used to 
# calculate the intensity of the workout based on the user's level.
class IntensityStrategy:
    def calculate_intensity():
        pass

# The Beginner, Intermediate, and Advanced classes are subclasses of the IntensityStrategy class.
class Beginner(IntensityStrategy):
    def calculate_intensity(self, sets, repetitions):
        return sets * 0.5, repetitions * 0.5

class Intermediate(IntensityStrategy):
    def calculate_intensity(self, sets, repetitions):
        return sets * 0.7, repetitions * 0.7

class Advanced(IntensityStrategy):
    def calculate_intensity(self, sets, repetitions):
        return sets * 0.9, repetitions * 0.9
