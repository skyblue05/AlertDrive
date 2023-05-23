from flask import Flask, request

app = Flask(__name__)

# Define a route to receive data updates
@app.route('/update-data', methods=['POST'])
def update_data():
    # Code to update the data.json file here
    return 'Data updated successfully'

if __name__ == '__main__':
    app.run(port=5000)
