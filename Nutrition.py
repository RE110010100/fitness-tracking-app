from DashboardMenu import DashboardMenu

class Nutrition(DashboardMenu):
    def __init__(self):
        super().__init__("Nutrition")
        self.FoodList = []
        
    def addFood(self, food):
        self.FoodList.append(food)
    
    def removeFood(self, food):
        if food in self.FoodList:
            self.FoodList.remove(food)
    
    def modifyFood(self, food, new_food):
        if food in self.FoodList:
            index = self.FoodList.index(food)
            self.FoodList[index] = new_food
            return self.FoodList[index]
    
    def retrieveFoods(self):
        return self.FoodList
    
    def share(self):
        print("My food list includes:")
        for food in self.FoodList:
            print(food.name)
