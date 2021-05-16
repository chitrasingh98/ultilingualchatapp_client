
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
# from translate import translate

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return ("hello world")


@app.route('/predict', methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    login_json = request.get_json()

    if not login_json:
        return jsonify({'msg': 'Missing JSON'}), 400
    trans_Mar = {"Hello": "हॅलो", "How are you?": "तू कसा आहेस?",
                 "I am fine": "मी ठीक आहे", "Good": "चांगले", "Okay": "ठीक आहे"}
    trans_Eng = {"हॅलो": "Hello",  "तू कसा आहेस?": "How are you?",
                 "मी ठीक आहे": "I am fine",  "चांगले": "Good",  "ठीक आहे": "Okay"}
    message = login_json.get('message')
    messageLanguage = login_json.get('messageLanguage')
    language = login_json.get('language')
    if(messageLanguage != language):
        if(messageLanguage == "English"):
            translatedMessage = trans_Mar[message]
        elif(messageLanguage == "Marathi"):
            translatedMessage = trans_Eng[message]
    else:
        translatedMessage = message
    print("message", message, "translated message: ", translatedMessage)
    return jsonify({'translatedMessage': translatedMessage}), 200
    englishSentence = message
    # printTest(englishSentence)
    # js=j(englishSentence[0])
    # js=translate(englishSentence[0])
    # output=englishSentence[0].upper()
    # return render_template('frontend.html',original_text='Original English Text:  {}'.format(englishSentence[0]), prediction_text='Translated Text:  {}'.format(js))


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
