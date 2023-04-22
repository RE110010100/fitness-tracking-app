from enum import Enum
from DashboardMenu import DashboardMenu

class GoalType(Enum):
    DEFAULT = 0
    WEIGHT_LOSS = 1
    STRENGTH_GAIN = 2
    ENDURANCE_IMPROVEMENT = 3

class FitnessGoal(DashboardMenu):
    def __init__(self):
        super().__init__("FitnessGoal")
        self.goal_type = 0
        self.target = 0
    
    def getGoalType(self):
        return self.goal_type
    
    def getTarget(self):
        return self.target
    
    def setTarget(self, target):
        self.target = target
    
    def setGoalType(self, goal_type):
        self.goal_type = goal_type
    
    def share(self):
        print("Sharing workout goals...")
