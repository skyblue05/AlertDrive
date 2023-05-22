from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/drivers', methods=['POST'])
def add_driver():
    data = request.get_json()

    # Process the data and perform any necessary actions
    # (e.g., save the driver's information to a database)

    # Return a response indicating success
    response = {
        'message': 'Driver added successfully',
        'data': data
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run()
