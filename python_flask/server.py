from flask import Flask, jsonify
import pymysql.cursors

app = Flask(__name__)

# Database configuration
db_config = {
    'host': '127.0.0.1',
    'user': 'root',
    'password': 'password',
    'database': 'database'
}

# Route to fetch users
@app.route('/users')
def get_users():
    connection = pymysql.connect(**db_config)
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT Id, BatchNumber, TransactionDate, LotNumber FROM tbl_user_reports LIMIT 100000")
            users = cursor.fetchall()
    finally:
        connection.close()

    return jsonify({
        'message': 'Running from Python',
        'total': len(users),
        'data': users
    })

if __name__ == '__main__':
    app.run(debug=True)
