from shareFitness import SocialMedia
# Decorator pattern is used to add additional functionality to an object dynamically where 
# we are sharing the workout details on twitter on the basis of the decorator instance.
class SocialMediaDecorator(SocialMedia):
   def __init__(self, sharedFitness):
      self.sharedFitness = sharedFitness;

   def share(self):
      response = str(self.sharedFitness.share())
      response.replace('"\\\"', "")
      return self.shareOnTwitter(str(response));

   def shareOnTwitter(self, sharedResponse):
      responseTwitterURL = "http://twitter.com/share?text=" + sharedResponse + "&hashtags#'workout'"
      return responseTwitterURL