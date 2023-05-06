# Description: Abstract class for all dashboard menus
from abc import ABC, abstractmethod

# Abstract class for all dashboard menus
class DashboardMenu(ABC):
    def __init__(self, menuID):
        
        self.menuID = menuID
        
    def getMenuID(self):
        return self.menuID
    
    @abstractmethod
    def setMenuID(self, menuID):
        pass
