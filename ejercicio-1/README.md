# API de Tareas - Prueba Técnica

API REST para gestión de tareas, construida con Node.js, TypeScript, Express y Supabase.

##  Demo en Producción

**URL de la API:** [https://tu-proyecto.vercel.app](https://tu-proyecto.vercel.app)

Endpoints disponibles:
- `GET /` - Lista De Endpoints
- `GET /api/tasks` - Listar tareas
- `POST /api/tasks` - Crear tarea

##  Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **TypeScript** - Lenguaje con tipado estático
- **Express** - Framework web
- **Supabase** - Base de datos PostgreSQL
- **Vitest** - Testing framework moderno y rápido
- **Vercel** - Plataforma de deployment


## Documentación de la API

### Listar todas las tareas

```http
GET /api/tasks
```

**Respuesta:**
```json
{
  "ok": true,
  "tareas": [
    {
      "id": 1,
      "titulo": "Completar prueba técnica",
      "completada": false
    }
  ]
}
```

### Crear una tarea

```http
POST /api/tasks
Content-Type: application/json

{
  "titulo": "Nueva tarea"
}
```

**Respuesta (201):**
```json
{
  "ok": true,
  "tarea": {
    "id": 1,
    "titulo": "Nueva tarea",
    "completada": false
  }
}
```

```

## 🔒 Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| `SUPABASE_URL` | URL de tu proyecto en Supabase |
| `SUPABASE_KEY` | Clave anon/public de Supabase |
| `PORT` | Puerto del servidor (default: 3000) |

