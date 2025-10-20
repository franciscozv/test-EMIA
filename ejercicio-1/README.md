# API de Tareas - Prueba Técnica

API REST para gestión de tareas, construida con Node.js, TypeScript, Express y Supabase.

**URL:** [https://test-emia-iota.vercel.app](https://test-emia-iota.vercel.app/)

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


## 🔒 Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| `SUPABASE_URL` | URL de tu proyecto en Supabase |
| `SUPABASE_KEY` | Clave anon/public de Supabase |
| `PORT` | Puerto del servidor (default: 3000) |

## Decisiones Técnicas

### ¿Por qué elegí estas tecnologías?

**Node.js + Express**
- Es lo que aprendí y conozco mejor
- Express es simple para hacer APIs REST
- Tiene mucha documentación y tutoriales

**TypeScript**
- Me ayuda a encontrar errores antes de ejecutar el código
- El autocompletado del editor es mucho mejor
- Me obliga a pensar en los tipos de datos

**Supabase (PostgreSQL)**
- No tuve que instalar ni configurar una base de datos local
- Es gratis y fácil de usar
- Solo necesito copiar una URL y listo

**Vitest para tests**
- Es más rápido que Jest
- La configuración es más simple
- Tiene una interfaz visual para ver los tests

### Estructura del código

Separé el código en carpetas para que sea más fácil de entender:
- `config/` - Conexión a la base de datos
- `controllers/` - La lógica de cada endpoint
- `routes/` - Las URLs de la API
- `models/` - Las consultas a la base de datos

Así si algo falla, sé exactamente dónde buscar.

### Cosas que aprendí haciendo este proyecto

- Cómo conectar Node.js con una base de datos en la nube
- Hacer tests automáticos de una API
- Desplegar en Vercel
