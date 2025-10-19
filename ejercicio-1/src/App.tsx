import { useState, useEffect } from 'react';
import type { Task } from './types/task';
import { getTasks, createTask } from './services/taskService';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setError('');
    } catch (err) {
      setError('Error al cargar tareas');
    } finally {
      setLoading(false);
    }
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const newTask = await createTask(input);
      setTasks([newTask, ...tasks]);
      setInput('');
      setError('');
    } catch (err) {
      setError('Error al crear tarea');
    }
  }

  return (
    <div className="app">
      <h1>Mis Tareas</h1>

      {error && <div className="error">{error}</div>}

      <form className="form" onSubmit={handleAdd}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button type="submit">Agregar</button>
      </form>

      {loading ? (
        <div className="loading">Cargando...</div>
      ) : tasks.length === 0 ? (
        <div className="empty">No hay tareas</div>
      ) : (
        <div>
          {tasks.map(task => (
            <div key={task.id} className="task">
              <span className={task.completada ? 'completada' : ''}>
                {task.titulo}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;