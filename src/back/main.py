from flask import *
from flask_cors import CORS
from data import *

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route("/dict")
def showArray():
    return str(dict), 200, {"ContentType": "application/json"}

@app.route("/add", methods=["POST"])
def addSyllable():
    print("here")
    print(request)
    print(request.form)
    # a = json.loads(request.form["params"])
    # print(a)
    return "Added syllable", 200, {"ContentType": "text/plain"}

if __name__ == "__main__":
    app.run()