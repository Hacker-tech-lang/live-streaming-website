from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/create_account', methods=['POST'])
def create_account():
    email = request.json.get('email')
    if email:
        # Here you could add logic to store the email in a database
        return jsonify({'message': 'Account created successfully!'}), 201
    return jsonify({'error': 'Email is required'}), 400

if __name__ == '__main__':
    app.run(debug=True)
  
