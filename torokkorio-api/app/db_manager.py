from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Payment(db.Model):
    __tablename__ = 'payments'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String)
    amount = db.Column(db.BigInteger)
    account_type = db.Column(db.Integer)

    def __init__(self, id, name, amount, account_type):
        self.id = id
        self.name = name
        self.amount= amount
        self.account_type = account_type

    def insert(self):
        db.session.add(self)

    def delete(self):
        db.session.delete(self)

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'amount': self.amount,
            'account_type': self.account_type
        }


def commit():
    db.session.commit()
