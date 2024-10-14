from flask import *
from flask_cors import CORS
from data import *

app = Flask(__name__)
CORS(app, supports_credentials=True)
dictIncr = {"ba": "8️⃣"}

@app.route("/save")
def saveDict():
    with open('dict.json', 'r+', encoding='utf-8') as dictFile:
        origDict = json.load(dictFile)
        print(origDict)
        origDict.update(dictIncr)
        print(origDict)
        json.dump(origDict, dictFile, ensure_ascii=False)
    return "Saved to File", 200, {"ContentType": "text/plain"}

@app.route("/dict")
def showArray():
    return str(dict), 200, {"ContentType": "application/json"}

@app.route("/add", methods=["POST"])
def addSyllable():
    shengmu = request.form["shengmu"]
    yunmu = request.form["yunmu"]
    emoji = request.form["emoji"]
    print(shengmu, yunmu, emoji)
    return "Added syllable", 200, {"ContentType": "text/plain"}

if __name__ == "__main__":
    app.run()