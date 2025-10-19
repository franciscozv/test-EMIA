import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;

dotenv.config();

app.use(cors());    

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de Tareas',
    endpoints: {
      listar: 'GET /api/tasks',
      crear: 'POST /api/tasks',
    }
  });
});

app.use('/api', taskRoutes);

app.use((req, res) => {
    res.status(404).json({ ok: false, mensaje: 'Ruta no encontrada' });
})

// Solo inicia el servidor si NO estamos en Vercel
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

export default app; 
