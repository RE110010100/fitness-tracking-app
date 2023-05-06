from sharedecorator import SocialMediaDecorator
# TwiiterDecorator is a subclass of SocialMediaDecorator and overrides the shareOnTwitter method.
class TwitterDecorator(SocialMediaDecorator):

    def __init__(self, sharedFitness):
      super().__init__(sharedFitness);		
   
    def share(self):
      response = self.sharedFitness.share()	       
      return self.shareOnTwitter(response)

    def shareOnTwitter(self, sharedResponse):
     responseTwitterURL = "http://twitter.com/share?text=I worked out &hashtags="#workout"