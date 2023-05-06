import json
from clients import get_dynamo_client
from boto3.dynamodb.conditions import Key

dynamo_client = get_dynamo_client()

class Users:
    def __init__(self, event):
        self.email = event["email"]
        self.password = event["password"]
        self.name = event.get("name", None)
        self.lastName = event.get("lastName", None)

    def invokeUserAPI(self):
        if(self.name!=None):
            return self.signupUser()
        else:
            return self.loginUser()
    
    def signupUser(self):
        try:
            name = self.name
            lastName = self.lastName
            email = self.email
            password = self.password

            table = dynamo_client.Table('Users')
            table.put_item(Item={'name': name,'email': email, 'lastName': lastName, 'password': password})

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

        except Exception as e:
            response = {"Message": str(e)}
            return {"status": 204, "body":json.dumps(response)}

    def loginUser(self):
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
            password = self.password
            
            table = dynamo_client.Table('Users')
            response = table.query(
                    KeyConditionExpression=Key('email').eq(email)
            )
            items = response['Items']
            if len(items) == 0:
                response = {"Message": "Email Address not Found"}
                return {"status": 206, "headers": headers, "body":json.dumps(response)}
            if password == items[0]['password']:
                response = {"Message": "Succesful Login", "email": email, "name": items[0]["name"]}
                return {"status": 200, "headers": headers, "body":json.dumps(response)}
            else:
                response = {"Message": "Incorrect Password"}
                return {"status": 205, "headers": headers, "body":json.dumps(response)}

        except Exception as e:
            response = {"Message": str(e)}
            return {"status": 204, "headers": headers, "body":json.dumps(response)}

