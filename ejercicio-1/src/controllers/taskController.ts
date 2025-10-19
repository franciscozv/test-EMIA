import { Request, Response } from 'express';
import { supabase } from '../config/supabase';


export class TaskController {
    static async obtenerTareas(req: Request, res: Response) {
        try {
            const { data, error } = await supabase
                .from('tasks')
                .select('*');

            if (error) throw error;
            res.json({
                ok: true,
                tareas: data
            })
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({
                ok: false,
            mensaje: 'Error al obtener las tareas'
      });
        }
    }
  static async crearTarea(req: Request, res: Response) {
    try {
      const { titulo } = req.body;
      
      if (!titulo || titulo.trim() === '') {
        return res.status(400).json({
          ok: false,
          mensaje: 'El título es obligatorio'
        });
      }
      
      const { data, error } = await supabase
        .from('tasks')
        .insert([
          { 
            titulo: titulo.trim(),
            completada: false 
          }
        ])
        .select();  
      
      if (error) throw error;
      
      res.status(201).json({
        ok: true,
        tarea: data[0]
      });
      
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        ok: false,
        mensaje: 'Error al crear la tarea'
      });
    }
  }
    
}