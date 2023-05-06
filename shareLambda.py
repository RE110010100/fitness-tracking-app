import json
import logging
from clients import get_dynamo_client
from boto3.dynamodb.conditions import Key, Attr

from shareFitness import SocialMedia
from workouthistory import WorkoutHistory
from nutritionhistory import NutritionHistory
from sharedecorator import SocialMediaDecorator

logger = logging.getLogger('displayhistory')

dynamo_client = get_dynamo_client()

def lambda_handler(event, context):
    headers = {
                    "Content-Type" : "application/json",
                    "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                    "Access-Control-Allow-Methods" : "OPTIONS,POST",
                    "Access-Control-Allow-Credentials" : "true",
                    "Access-Control-Allow-Origin" : "*",
                    "X-Requested-With" : "*"
                }
                
    nutrition = event.get("nutrition", None)
    workout = event.get("workout", None)
    
    # workout = WorkoutHistory(event["email"])
    nutritionURL = SocialMediaDecorator(NutritionHistory(event["email"]))
    workoutURL = SocialMediaDecorator(WorkoutHistory(event["email"]))
    
    if(workout!=None):
        return {
        'headers': headers,
        'status': 200,
        'body': json.dumps(workoutURL.share())
        }
    else:
        return {
        'headers': headers,
        'status': 200,
        'body': (nutritionURL.share())
        }