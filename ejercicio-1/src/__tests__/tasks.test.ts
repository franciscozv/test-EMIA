
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../index';



describe('🧪 API de Tareas - Tests con Vitest', () => {
  
  // Variable para guardar el ID de una tarea creada
  let tareaId: number;

  // TEST 1: Crear una tarea
  describe('POST /api/tasks', () => {
    it('debería crear una nueva tarea', async () => {
      const nuevaTarea = {
        titulo: 'Test con Vitest: Aprender testing moderno'
      };

      const respuesta = await request(app)
        .post('/api/tasks')
        .send(nuevaTarea)
        .set('Content-Type', 'application/json');

      expect(respuesta.status).toBe(201);
      expect(respuesta.body.ok).toBe(true);
      expect(respuesta.body.tarea).toHaveProperty('id');
      expect(respuesta.body.tarea.titulo).toBe('Test con Vitest: Aprender testing moderno');
      expect(respuesta.body.tarea.completada).toBe(false);
      
      // Guardar el ID para usar en otros tests
      tareaId = respuesta.body.tarea.id;
      console.log('✅ Tarea creada con ID:', tareaId);
    });

    it('debería fallar si no se envía título', async () => {
      const respuesta = await request(app)
        .post('/api/tasks')
        .send({})
        .set('Content-Type', 'application/json');

      expect(respuesta.status).toBe(400);
      expect(respuesta.body.ok).toBe(false);
      expect(respuesta.body.mensaje).toContain('título');
    });

    it('debería fallar si el título está vacío', async () => {
      const respuesta = await request(app)
        .post('/api/tasks')
        .send({ titulo: '   ' })
        .set('Content-Type', 'application/json');

      expect(respuesta.status).toBe(400);
      expect(respuesta.body.ok).toBe(false);
    });

    it('debería limpiar espacios en blanco del título', async () => {
      const respuesta = await request(app)
        .post('/api/tasks')
        .send({ titulo: '  Tarea con espacios  ' })
        .set('Content-Type', 'application/json');

      expect(respuesta.status).toBe(201);
      expect(respuesta.body.tarea.titulo).toBe('Tarea con espacios');
    });
  });

  // TEST 2: Listar tareas
  describe('GET /api/tasks', () => {
    it('debería listar todas las tareas', async () => {
      const respuesta = await request(app).get('/api/tasks');

      expect(respuesta.status).toBe(200);
      expect(respuesta.body.ok).toBe(true);
      expect(Array.isArray(respuesta.body.tareas)).toBe(true);
      expect(respuesta.body.tareas.length).toBeGreaterThan(0);
    });

    it('cada tarea debería tener la estructura correcta', async () => {
      const respuesta = await request(app).get('/api/tasks');
      
      const primeraTarea = respuesta.body.tareas[0];
      expect(primeraTarea).toHaveProperty('id');
      expect(primeraTarea).toHaveProperty('titulo');
      expect(primeraTarea).toHaveProperty('completada');
      expect(typeof primeraTarea.id).toBe('number');
      expect(typeof primeraTarea.titulo).toBe('string');
      expect(typeof primeraTarea.completada).toBe('boolean');
    });
  });

});