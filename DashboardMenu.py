from abc import ABC, abstractmethod

class DashboardMenu(ABC):
    def __init__(self, menuID):
        
        self.menuID = menuID
        
    def getMenuID(self):
        return self.menuID
    
    @abstractmethod
    def setMenuID(self, menuID):
        pass
