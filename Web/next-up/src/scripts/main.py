import pandas as pd
import numpy as np

from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

from sklearn.model_selection import train_test_split

from sklearn.ensemble import RandomForestRegressor

from sklearn.preprocessing import LabelEncoder

from flask import Flask

app = Flask(__name__)


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
    X, y, test_size=0.2, random_state=0)

model = RandomForestRegressor(max_depth=5, random_state=14)
model.fit(X_train, y_train)


print("RANDOM FOREST REGRESSOR")

print("TRAINING DATA ACCURACY - ")
print(model.score(X_train, y_train))

print("TESTING DATA ACCURACY - ")
print(model.score(X_test, y_test))
