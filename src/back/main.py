from flask import Flask
from flask_cors import CORS
from data import *

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route("/dict")
def showArray():
    return str(dict), 200, {"ContentType": "application/json"}

if __name__ == "__main__":
    app.run()