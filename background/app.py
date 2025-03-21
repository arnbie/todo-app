from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from database import get_db, init_db

app = Flask(__name__)
CORS(app)

# Initialize the database
init_db()

#vamos a conseguir todas las tareas

@app.route('/tasks', methods=['GET'])
def get_tasks():
    db = get_db()
    tasks = db.execute('SELECT * FROM tasks').fetchall()
    db.close()
    return jsonify([dict(task) for task in tasks])

#vamos a conseguir una tarea por id
@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    db = get_db()
    task = db.execute('SELECT * FROM tasks WHERE id = ?', [task_id]).fetchone()
    db.close()
    if task is None:
        abort(404)
    return jsonify(dict(task))



#ahora pasamos a crear una tarea, para eso nos mandaran un POST con un titulo, una descripcion y un estado
@app.route('/tasks', methods=['POST'])
def create_task():
    new_task = {
        'title': request.json['title'],
        'description': request.json.get('description', ''),
        'completed': False
    }
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)',
                   (new_task['title'], new_task['description'], new_task['completed']))
    conn.commit()
    task_id = cursor.lastrowid
    conn.close()
    new_task['id'] = task_id
    return jsonify(new_task), 201
    #ahora vamos a actualizar una tarea
@app.route('/tasks/<int:task_id>', methods=['PUT'])

def update_task(task_id):
    db=get_db()
    task = db.execute('SELECT * FROM tasks WHERE id = ?', [task_id]).fetchone()
    if task is None:
        abort(404)
    updated_task = {
        'title': request.json.get('title', task['title']),
        'description': request.json.get('description', task['description']),
        'completed': request.json.get('completed', task['completed'])
    }

    db.execute('UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?',
               (updated_task['title'], updated_task['description'], updated_task['completed'], task_id))
    db.commit()
    db.close()
    return jsonify(updated_task)

#ahora vamos a borrar una tarea
@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    db = get_db()
    task = db.execute('SELECT * FROM tasks WHERE id = ?', [task_id]).fetchone()
    if task is None:
        abort(404)

    db.execute('DELETE FROM tasks WHERE id = ?', [task_id])
    db.commit()
    db.close()
    return jsonify({'result': True})

if __name__ == '__main__':
    app.run(debug=True)
