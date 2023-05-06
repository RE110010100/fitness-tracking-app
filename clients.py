import boto3

# get_dynamo_client() and get_s3_client() are used to get the boto3 clients for DynamoDB and S3 respectively.
def get_dynamo_client():
        
    sts_client = boto3.client('sts')
    assumed_role_object=sts_client.assume_role(
        RoleArn="arn:aws:iam::696255333245:role/DynamoDBAccessRole",
        RoleSessionName="AssumeRoleSession1"
    )
    credentials=assumed_role_object['Credentials']
    # print(credentials)
    
    ACCESS_KEY = credentials['AccessKeyId']
    SECRET_KEY = credentials['SecretAccessKey']
    SESSION_TOKEN = credentials['SessionToken']
        
    dynamo_client = boto3.resource(
        'dynamodb',
        aws_access_key_id=ACCESS_KEY,
        aws_secret_access_key=SECRET_KEY, 
        aws_session_token=SESSION_TOKEN
    )
    return dynamo_client

def get_s3_client():
    sts_client = boto3.client('sts')
    assumed_role_object=sts_client.assume_role(
        RoleArn="arn:aws:iam::696255333245:role/DynamoDBAccessRole",
        RoleSessionName="AssumeRoleSession1"
    )
    credentials=assumed_role_object['Credentials']
    # print(credentials)
    
    ACCESS_KEY = credentials['AccessKeyId']
    SECRET_KEY = credentials['SecretAccessKey']
    SESSION_TOKEN = credentials['SessionToken']
    s3_client = boto3.client(
        's3',
        aws_access_key_id=ACCESS_KEY,
        aws_secret_access_key=SECRET_KEY, 
        aws_session_token=SESSION_TOKEN
    )
    return s3_client