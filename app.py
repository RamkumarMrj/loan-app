from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
CORS(app)

db_username = 'root'
db_password = 'root'
db_name = 'loan_app'

app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{db_username}:{db_password}@localhost/{db_name}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class BalanceSheet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    year = db.Column(db.Integer, nullable=False)
    month = db.Column(db.Integer, nullable=False)
    profitOrLoss = db.Column(db.Float, nullable=False)
    assetsValue = db.Column(db.Float, nullable=False)

@app.route('/api/initiate', methods=['POST'])
def initiate_application():
    return jsonify({"message": "Initiation complete"})

@app.route('/api/submit', methods=['POST'])
def submit_application():
    try:
        data = request.json
        balance_sheet = BalanceSheet(
            year=2021,
            month=8,
            profitOrLoss=data["loanAmount"],
            assetsValue=data["businessDetails"]
        )
        db.session.add(balance_sheet)
        db.session.commit()

        return jsonify({"message": "Application submitted"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/application-result', methods=['GET'])
def get_application_result():
    try:
        application_result = "Your application result"
        return jsonify({"result": application_result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/balance-sheet', methods=['GET'])
def get_balance_sheet():
    try:
        balance_sheet_data = BalanceSheet.query.all()
        serialized_data = [
            {
                'year': entry.year,
                'month': entry.month,
                'profitOrLoss': entry.profitOrLoss,
                'assetsValue': entry.assetsValue
            }
            for entry in balance_sheet_data
        ]

        return jsonify(serialized_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
