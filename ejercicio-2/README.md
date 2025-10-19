# App de Tareas

Aplicación simple para gestionar tareas con React + TypeScript.



**URL:** [https://test-emia-1fmh-p62w7pa1w-franciscozvs-projects.vercel.app](https://test-emia-1fmh-p62w7pa1w-franciscozvs-projects.vercel.app/)

##  Tecnologías

- React 18
- TypeScript
- Vite
- Fetch API
- Vitest

## ✨ Funcionalidades

- Listar tareas
- Agregar tareas

## 💻 Instalación

```bash
# Clonar
git clone https://github.com/TU-USUARIO/app-tareas.git
cd app-tareas

# Instalar
npm install

# Configurar .env
echo "VITE_API_URL=http://localhost:3000/api" > .env

# Ejecutar
npm run dev
```

## 🧪 Tests

```bash
npm test
```

## 📦 Build

```bash
npm run build
```

## 🚀 Deploy en Vercel

1. Sube tu código a GitHub
2. Importa el proyecto en Vercel
3. Agrega variable: `VITE_API_URL=https://tu-api.vercel.app/api`
4. Deploy

## 📂 Estructura

```
src/
├── services/taskService.ts  # Llamadas a la API
├── types/task.ts            # Tipos TypeScript
├── App.tsx                  # Componente principal
├── App.test.tsx             # Tests
└── index.css                # Estilos básicos
```

## 🔌 API

Consume la API REST en: `VITE_API_URL`

Endpoints:
- `GET /tasks` - Listar
- `POST /tasks` - Crear

