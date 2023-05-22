from flask import Flask, request, jsonify

app = Flask(__name__)

# Mock data for admin and driver credentials
admin_credentials = {'admin_username': 'admin', 'admin_password': 'admin123'}
driver_credentials = {'driver_username': 'driver', 'driver_password': 'driver123'}

# Admin login API endpoint
@app.route('/api/admin-login', methods=['POST'])
def admin_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username == admin_credentials['admin_username'] and password == admin_credentials['admin_password']:
        return jsonify({'success': True, 'message': 'Admin login successful'})
    else:
        return jsonify({'success': False, 'message': 'Invalid admin credentials'})

# Driver login API endpoint
@app.route('/api/driver-login', methods=['POST'])
def driver_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username == driver_credentials['driver_username'] and password == driver_credentials['driver_password']:
        return jsonify({'success': True, 'message': 'Driver login successful'})
    else:
        return jsonify({'success': False, 'message': 'Invalid driver credentials'})

if __name__ == '__main__':
    app.run()
