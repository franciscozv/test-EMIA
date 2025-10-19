import { Router } from 'express';

import { TaskController } from '../controllers/taskController';

const router = Router();


router.get('/tasks', TaskController.obtenerTareas);
router.post('/tasks', TaskController.crearTarea);


export default router;