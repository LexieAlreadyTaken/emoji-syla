from flask import *
from flask_cors import CORS
from data import *

app = Flask(__name__)
CORS(app, supports_credentials=True)
dictIncr = {"ba": "8️⃣"}

@app.route("/save")
def saveDict():
    dictFile = open('dict.json', 'r', encoding='utf-8')
    origDict = json.load(dictFile)
    dictFile.close()
    origDict.update(dictIncr)
    print(origDict)
    dictFile = open('dict.json', 'w', encoding='utf-8')
    json.dump(origDict, dictFile, ensure_ascii=False)
    dictFile.close()
    return "Saved to File", 200, {"ContentType": "text/plain"}
@app.route("/load")
def loadDict():
    dictFile = open('dict.json', 'r', encoding='utf-8')
    origDict = json.load(dictFile)
    dictFile.close()
    return json.dumps(origDict), 200, {"ContentType": "text/plain"}

@app.route("/dict")
def showArray():
    return str(dict), 200, {"ContentType": "application/json"}

@app.route("/add", methods=["POST"])
def addSyllable():
    syllable = request.form["syllable"]
    emoji = request.form["emoji"]
    dictIncr[syllable] = emoji
    print(syllable, emoji)
    return "Added syllable", 200, {"ContentType": "text/plain"}

if __name__ == "__main__":
    app.run()