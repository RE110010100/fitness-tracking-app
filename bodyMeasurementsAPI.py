import json
from clients import get_dynamo_client
from boto3.dynamodb.conditions import Key

dynamo_client = get_dynamo_client()

# This class is used to insert and display body measurements of the user
# the API takes in the following parameters:
# chest, waist, height, weight, email 
# defines the header like content type, access control, etc to enable CORS.
class BodyMeasurementsClass:

    def __init__(self, event) -> None:
        self.chest = event.get('chest', None)
        self.waist = event.get('waist', None)
        self.height = event.get('height', None)
        self.weight = event.get('weight', None)
        self.email = event["email"]
    
    # This function is used to insert body measurements of the user.
    def insertBodyMeasurements(self):
        try:
            headers = {
                        "Content-Type" : "application/json",
                        "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                        "Access-Control-Allow-Methods" : "OPTIONS,POST",
                        "Access-Control-Allow-Credentials" : "true",
                        "Access-Control-Allow-Origin" : "*",
                        "X-Requested-With" : "*"
                    }
                    
            email = self.email
            height = self.height
            waist = self.waist
            weight = self.weight
            chest = self.chest

            # Check if the email address is already in the database.
            table = dynamo_client.Table('BodyMeasurements')
            
            response = table.query(
                    KeyConditionExpression=Key('email').eq(email)
            )
            
            items = response['Items']
            if len(items) == 0:
                table.put_item(Item={'email': email, 'height': height, 'waist': waist, 'weight': weight})
                response = {"Message": "User Measurements entered successfully", 'email': email}
                return {"status": 200, "headers": headers, "body":json.dumps(response)}
            elif email == items[0]['email']:
                table.delete_item(Key = {'email': email})
                table.put_item(Item={'email': email, 'height': int(height),'weight': int(weight), 'waist': int(waist), 'chest': int(chest)}) 
                response = {"Message": "User Updated"}
                return {"status": 200, "headers": headers, "body":json.dumps(response)}
        except Exception as e:
            response = {"Message": str(e)}
            return {"status": 204, "headers": headers, "body":json.dumps(response)}

    # This function is used to display body measurements of the user.
    def displayBodyMeasurements(self):
        try:
            headers = {
                    "Content-Type" : "application/json",
                    "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                    "Access-Control-Allow-Methods" : "OPTIONS,POST",
                    "Access-Control-Allow-Credentials" : "true",
                    "Access-Control-Allow-Origin" : "*",
                    "X-Requested-With" : "*"
                }
            
            email = self.email
            
            table = dynamo_client.Table('BodyMeasurements')
            response = table.query(
                    KeyConditionExpression=Key('email').eq(email)
            )
            items = response['Items']
            if len(items) == 0:
                response = {"Message": "Email Address not Found"}
                return {"status": 206, "headers": headers, "body":json.dumps(response)}
            elif email == items[0]['email']:
                response = {"Message": "User Found", "height": int(items[0]["height"]), "waist": int(items[0]["waist"]), "weight": int(items[0]["weight"]), "chest": int(items[0]["chest"])}
                return {"status": 200, "headers": headers, "body":json.dumps(response)}
        except Exception as e:
            response = {"Message": str(e)}
            return {"status": 204, "headers": headers, "body":json.dumps(response)}

