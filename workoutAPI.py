import json
from clients import get_dynamo_client
from datetime import datetime
from boto3.dynamodb.conditions import Key
from Intensity import Beginner, Intermediate, Advanced

dynamo_client = get_dynamo_client()

# Workout class that handles all the workout related operations.
# Strategy pattern is used to handle the intensity of the workout.
class Workout:
    def __init__(self, event):
        self.exercisename = event.get("exercisename", None)
        self.intensity = event.get("intensity", None)
        if(self.intensity != None):
            if(self.intensity == "beginner"):
                self.intensityInterface = Beginner()
        self.email = event.get("email", None)
        self.workout = event.get("workout", None)

    # invokeWorkoutAPI method is used to invoke the workout API on the basis of the parameters passed.
    def invokeworkoutAPI(self):
        if(self.email == None and self.workout == None):
            return self.getWorkoutInfo()
        elif(self.exercisename == None and self.intensity == None and self.workout==None):
            return self.displayWorkoutHistory()
        else:
            return self.insertWorkout()

    # displayWorkoutHistory method is used to display the workout history of the user.
    def displayWorkoutHistory(self):
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
            
            table = dynamo_client.Table('Workout')
            response = table.query(
                    KeyConditionExpression=Key('email').eq(email)
            )

            items = response['Items']
            if len(items) == 0:
                response = {"Message": "Email Address not Found"}
                return {"status": 206, "headers": headers, "body":json.dumps(response)}
            elif email == items[0]['email']:
                responses = []
                for i in range(len(items[0]["workout"])):
                    response = {"Message": "User Found", "intensity": items[0]["workout"][i]["intensity"], "reps": int(items[0]["workout"][i]["reps"]),
                                "sets":int(items[0]["workout"][i]["sets"]), "calorie":int(items[0]["workout"][i]["calorie"]),
                                "exercisename":items[0]["workout"][i]["exercisename"], "date": items[0]["workout"][i]["date"]}
                    responses.append(response)
                return {"status": 200, "headers": headers, "body":json.dumps(responses)}
        except Exception as e:
            response = {"Message": str(e)}
            return {"status": 204, "headers": headers, "body":json.dumps(response)}

    # insertWorkout method is used to insert the workout details of the user.
    def insertWorkout(self):
        try:
            email = self.email
            workout = self.workout
            
            
            date = datetime.today().strftime('%Y-%m-%d')
            for i in range(len(workout)):
                workout[i]["date"] = date
            
            table = dynamo_client.Table('Workout')
            
            table = dynamo_client.Table('Workout')
            response = table.query(
                    KeyConditionExpression=Key('email').eq(email)
            )

            items = response['Items']

            if len(items) == 0:
                table.put_item(Item={'email': email, 'workout': workout})
                response = {"Message": "Data item Succesfully pushed"}

                return {"status": 200, 
                        "headers": {
                            "Content-Type" : "application/json",
                            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                            "Access-Control-Allow-Methods" : "OPTIONS,POST",
                            "Access-Control-Allow-Credentials" : "true",
                            "Access-Control-Allow-Origin" : "*",
                            "X-Requested-With" : "*"
                        },
                        "body":json.dumps(response)}
            elif email == items[0]['email']:
                table.update_item(
                    Key={
                        "email": email
                    },
                    UpdateExpression = "SET #m = list_append(workout, :newworkout)",
                    ExpressionAttributeNames={
                        "#m": "workout",
                    },
                    ExpressionAttributeValues={
                        ":newworkout": workout
                    },
                )

                response = {"Message": "Data item Updated"}
                return {"status": 200, 
                        "headers": {
                            "Content-Type" : "application/json",
                            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                            "Access-Control-Allow-Methods" : "OPTIONS,POST",
                            "Access-Control-Allow-Credentials" : "true",
                            "Access-Control-Allow-Origin" : "*",
                            "X-Requested-With" : "*"
                        },
                        "body":json.dumps(response)}
        except Exception as e:
            response = {"Message": str(e)}
            return {"status": 204, "body":json.dumps(response)}

    # getWorkoutInfo method is used to get the workout information on the basis of the intensity.
    def getWorkoutInfo(self):
        try:
            headers = {
                        "Content-Type" : "application/json",
                        "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                        "Access-Control-Allow-Methods" : "OPTIONS,POST",
                        "Access-Control-Allow-Credentials" : "true",
                        "Access-Control-Allow-Origin" : "*",
                        "X-Requested-With" : "*"
                    }
                    
            exercisename = self.exercisename
            intensity = self.intensity
            
            table = dynamo_client.Table('Exercises')
            
            response = table.query(
                    KeyConditionExpression=Key('exercisename').eq(exercisename)
            )
            
            items = response['Items']
            if len(items) == 0:
                response = {"Message": "Exercise not Found"}
                return {"status": 206, "headers": headers, "body":json.dumps(response)}
            if exercisename == items[0]['exercisename']:
                sets,reps = self.intensityInterface.calculate_intensity(items[0]["sets"], items[0]["reps"])
                calorie = int(items[0]['calorie'])
                
                response = {"Message": "Exercise Found", "exercisename": exercisename, "intensity": intensity, 
                            "sets": sets, "reps": reps, "calorie": calorie}
                return {"status": 200, "headers": headers, "body":json.dumps(response)}

        except Exception as e:
            response = {"Message": str(e)}
            return {"status": 204, "headers": headers, "body":json.dumps(response)}