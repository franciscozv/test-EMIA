import type { Task } from '../types/task';

const API = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Obtener todas las tareas
export async function getTasks(): Promise<Task[]> {
  const res = await fetch(`${API}/api/tasks`);
  const data = await res.json();
  return data.tareas;
}

// Crear tarea
export async function createTask(titulo: string): Promise<Task> {
  const res = await fetch(`${API}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo }),
  });
  const data = await res.json();
  return data.tarea;
}
