from flask import Flask
from flask_cors import CORS

from app.db_manager import db


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://pinkikki:password@localhost:5432/torokkoriodb'
db.init_app(app)
CORS(app)
app.config['JSON_AS_ASCII'] = False

from .views import payments

app.register_blueprint(payments.mod)
