// TodoApp.jsx
import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import { getTasks, addTask, updateTask, deleteTask } from './api/todoApi';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // Obtener tareas al cargar el componente
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Añadir una nueva tarea
  const handleAddTask = async () => {
    if (newTask.trim()) {
      try {
        const task = { title: newTask.trim(), description: "", completed: false };
        const addedTask = await addTask(task);
        setTasks([...tasks, addedTask]);
        setNewTask("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  // Marcar tarea como completada/incompleta
  const handleToggleTask = async (taskId) => {
    try {
      const task = tasks.find(t => t.id === taskId);
      const updatedTask = { ...task, completed: !task.completed };
      await updateTask(taskId, updatedTask);
      setTasks(tasks.map(t => (t.id === taskId ? updatedTask : t)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Eliminar una tarea
  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter(t => t.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Filtrar tareas según el filtro seleccionado
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6">
        
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Tasks</h1>
          <p className="text-slate-500">Cosas por hacer hoy</p>
        </header>

        {/* Input nueva tarea */}
        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Añadir nueva tarea..."
            className="flex-1 p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          />
          <button 
            onClick={handleAddTask}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Añadir
          </button>
        </div>

        {/* Filtros */}
        <div className="flex gap-4 mb-6">
          <button 
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${filter === "all" ? 'bg-blue-100 text-blue-600' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            Todas
          </button>
          <button 
            onClick={() => setFilter("active")}
            className={`px-4 py-2 rounded-lg ${filter === "active" ? 'bg-blue-100 text-blue-600' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            Pendientes
          </button>
          <button 
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-lg ${filter === "completed" ? 'bg-blue-100 text-blue-600' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            Completadas
          </button>
        </div>

        {/* Lista de tareas */}
        <div className="space-y-3">
          {filteredTasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onToggle={() => handleToggleTask(task.id)}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="mt-6 text-sm text-slate-500">
          {tasks.filter(t => !t.completed).length} tareas pendientes
        </div>
      </div>
    </div>
  );
};

export default TodoApp;