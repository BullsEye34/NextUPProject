import pandas as pd
import numpy as np

from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

from sklearn.model_selection import train_test_split

from sklearn.ensemble import RandomForestRegressor

from sklearn.preprocessing import LabelEncoder

from flask import Flask
from flask import request
import json

from flask_cors import CORS


""" from sklearn.tree import DecisionTreeRegressor """

app = Flask(__name__)
cors = CORS(app)


dataset = pd.read_csv('cleandataset.csv')
print(dataset)
le = LabelEncoder()

dataset.Location = le.fit_transform(dataset.Location)
print(dataset)

ct = ColumnTransformer(
    [("Location", OneHotEncoder(), [0])], remainder='passthrough')
dataset = ct.fit_transform(dataset)
print(dataset)

X = dataset[:, 1:-1]
y = dataset[:, -1]

print(X)
print(y)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.5, random_state=0)

model = RandomForestRegressor(max_depth=5, random_state=14)

""" model = DecisionTreeRegressor(max_depth=10, random_state=14) """
model.fit(X_train, y_train)


print("RANDOM FOREST REGRESSOR")

print("TRAINING DATA ACCURACY - ")
print(model.score(X_train, y_train))

print("TESTING DATA ACCURACY - ")
print(model.score(X_test, y_test))

Ypred = model.predict([[0, 0, 0, 3, 1, 2050, 5, 3]])
print(Ypred)


""" @app.route('/time')
def get_current_time():
    return {'prediction': dataset}
app.run(debug=True) """


def myconverter(o):
    if isinstance(o, np.float32):
        return float(o)


age = 0
fur = 1
@app.route('/predict',)
def get_prediction():
    city = request.args.get('city')
    age = request.args.get('age')
    floor = request.args.get('floor')
    bhk = request.args.get('bhk')
    sqft = request.args.get('sqft')
    furnish = request.args.get('furnish')

    if furnish == "true":
        fur = 1
    else:
        fur = 0

    if city == "Jayanagar":
        return {
            'prediction': str(str(model.predict([[0, 1, 0, bhk, fur, sqft, age, floor]]))),
        }
    elif city == "MG Road":
        return {
            'prediction': str(str(model.predict([[0, 0, 1, bhk, fur, sqft, age, floor]]))),
        }
    elif city == "Bommanahalli":
        return {
            'prediction': str(str(model.predict([[1, 0, 0, bhk, fur, sqft, age, floor]]))),
        }
    else:
        return {
            'prediction': str(str(model.predict([[0, 0, 0, 3, 1, 2050, 5, 3]]))),
        }


app.run(debug=True)
