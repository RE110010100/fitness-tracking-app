import json
import logging
from clients import get_dynamo_client
from boto3.dynamodb.conditions import Key, Attr
from shareFitness import SocialMedia

dynamo_client = get_dynamo_client()

# WorkoutHistory class inherits from SocialMedia class and overrides the share method.
# the share method returns the workout history of the user.
class WorkoutHistory(SocialMedia):
    def __init__(self,email):
        self.email = email
    
    def share(self):
        try:
            table = dynamo_client.Table('Workout')
            response = table.query(KeyConditionExpression=Key('email').eq(self.email))
            items = response['Items']
            
            responses = []
            
            for i in range(len(items[0]["workout"])):
                response = {"intensity": items[0]["workout"][i]["intensity"], "reps": int(items[0]["workout"][i]["reps"]),
                            "sets":int(items[0]["workout"][i]["sets"]), "calorie":int(items[0]["workout"][i]["calorie"]),
                            "exercisename":items[0]["workout"][i]["exercisename"], "date": items[0]["workout"][i]["date"]}
                logger.debug(response)
                responses.append(response)
            
            return json.dumps(responses)
        except Exception as e:
            logger.error(e)
            response = {"Message": str(e)}
            return json.dumps(response)