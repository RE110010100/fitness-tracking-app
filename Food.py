class Food:
    def __init__(self, food_name, calories, macronutrients):
        self.food_name = food_name
        self.calories = calories
        self.macronutrients = macronutrients
    
    def setFoodName(self, food_name):
        self.food_name = food_name
    
    def getFoodName(self):
        return self.food_name
    
    def getMacroNutrients(self):
        return self.macronutrients
    
    def setMacroNutrients(self, macronutrients):
        self.macronutrients = macronutrients
    
    def getCalories(self):
        return self.calories
    
    def setCalories(self, calories):
        self.calories = calories