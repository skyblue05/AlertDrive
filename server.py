from flask import Flask, jsonify
import http.client

app = Flask(__name__)

@app.route('/')
def index():
    conn = http.client.HTTPSConnection("dev-7m2fzgko154dsw4y.us.auth0.com")
    
    payload = "{\"client_id\":\"u4wdFo6WdolOwJRGQx4BQCgj0v7hiIr9\",\"client_secret\":\"TIzCfI6JDc4JlBUb7LJi9uaKRVdhakSKJiLOcVH1hv4_W9ckc56pItnuFltTf7a7\",\"audience\":\"https://dev-7m2fzgko154dsw4y.us.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}"
    
    headers = { 'content-type': "application/json" }
    
    conn.request("POST", "/oauth/token", payload, headers)
    
    res = conn.getresponse()
    data = res.read()
    
    return jsonify(data=data.decode("utf-8"))

if __name__ == '__main__':
    app.run()
