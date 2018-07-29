from flask import Blueprint, request, jsonify

from app import db_manager
from app.db_manager import Payment

mod = Blueprint('payments', __name__)


@mod.route('/create', methods=['POST'])
def create():
    name = request.json['name']
    amount = request.json['amount']

    payment = Payment(None, name, amount, 1)
    payment.insert()
    db_manager.commit()

    return jsonify({'message': 'success'})


@mod.route('/delete', methods=['POST'])
def delete():
    payment = Payment.query.get(request.form['id'])
    payment.delete()
    db_manager.commit()


@mod.route('/show', methods=['GET'])
def show():
    return jsonify({'payments': [Payment.as_dict(payment) for payment in Payment.query.all()]})
