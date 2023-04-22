class IntensityStrategy:
    def calculate_intensity():
        pass

class Beginner(IntensityStrategy):
    def calculate_intensity(self, sets, repetitions):
        return sets * 0.5, repetitions * 0.5

class Intermediate(IntensityStrategy):
    def calculate_intensity(self, sets, repetitions):
        return sets * 0.7, repetitions * 0.7

class Advanced(IntensityStrategy):
    def calculate_intensity(self, sets, repetitions):
        return sets * 0.9, repetitions * 0.9
