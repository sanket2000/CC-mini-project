import sys
from io import StringIO
import json

def lambda_handler(event, context):
    test_code = event['body']
    
    buffer = StringIO()
    sys.stdout = buffer

    try:
        exec(eval(test_code))
    except Exception as err:
        result = buffer.getvalue()
        return {
            'headers': {
            "Access-Control-Allow-Origin": "*",
            },
            'body': str(err)
        }

    sys.stdout = sys.__stdout__

    result = buffer.getvalue()

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": result #str(eval(eval(event['body'])))
    }