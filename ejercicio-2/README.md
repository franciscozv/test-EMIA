# App de Tareas

Aplicación simple para gestionar tareas con React + TypeScript.



**URL:** [https://test-emia-1fmh.vercel.app/](https://test-emia-1fmh.vercel.app/)

##  Tecnologías

- React 18
- TypeScript
- Vite
- Fetch API
- Vitest

## Instalación

```bash
# Clonar
git clone https://github.com/franciscozv/test-EMIA.git
cd ejercicio-2

# Instalar
npm install

# Configurar .env
echo "VITE_API_URL=http://localhost:3000/api" > .env

# Ejecutar
npm run dev
```

## Tests

```bash
npm test
```

## Build

```bash
npm run build
```

## Deploy en Vercel

1. Sube tu código a GitHub
2. Importa el proyecto en Vercel
3. Agrega variable: `VITE_API_URL=https://tu-api.vercel.app/api`
4. Deploy

## API

Consume la API REST en: `VITE_API_URL`

Endpoints:
- `GET /tasks` - Listar
- `POST /tasks` - Crear

## Decisiones Técnicas

### ¿Por qué elegí estas tecnologías?

**Vite**
- Mucho más rápido que Create React App
- Los cambios se ven al instante en el navegador
- La configuración es casi automática

**Fetch API (sin librerías)**
- Es suficiente para hacer las peticiones a la API. Si fuera un proyecto mas grande instalaria un axios o algo así.

**Vitest**
- Compatible con React Testing Library
- Tiene interfaz visual para ver los tests

### Diseño simple

Decidí poner todo en un solo archivo (`App.tsx`) porque:
- El proyecto es pequeño
- Es más fácil de entender todo junto
- No necesito complicarme con muchos componentes

### Cosas que aprendí

- Hacer tests de componentes
- Desplegar en Vercel
