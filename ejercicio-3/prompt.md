# Tarea: Diseño de Prompt para Base de Datos

## 1. Proyecto Base (Mi Definición)

**Nombre:** TodoApp - Gestor de Tareas Personal

**Descripción:** 
App simple para que usuarios organicen sus tareas diarias.

**Funcionalidades:**
- Crear, editar y eliminar tareas
- Marcar tareas como completadas
- Asignar prioridad (baja, media, alta)
- Fecha de vencimiento
- Categorizar por proyectos

---

## 2. Prompt Diseñado
```
Necesito diseñar una base de datos para TodoApp, 
una aplicación de gestión de tareas con estas características:

FUNCIONALIDADES:
- Usuarios pueden crear/editar/eliminar sus tareas
- Cada tarea tiene: título, descripción, prioridad (baja/media/alta), 
  fecha de vencimiento, estado (pendiente/completada)
- Las tareas se organizan en proyectos
- Un usuario puede tener múltiples proyectos

NECESITO:

1. Esquema de base de datos con:
   - Tablas necesarias (usuarios, tareas, proyectos)
   - Campos de cada tabla con tipos de datos
   - Relaciones entre tablas

2. Validaciones técnicas:
   - Campos obligatorios (NOT NULL)
   - Valores únicos donde corresponda
   - Restricciones de integridad (claves foráneas)

3. Reglas de negocio:
   - ¿Un usuario puede ver tareas de otros usuarios?
   - ¿Se pueden borrar proyectos con tareas activas?
   - ¿Quién puede modificar/eliminar tareas?
   - ¿Qué pasa con las tareas al eliminar un usuario?

FORMATO:
- Diagrama de tablas (puede ser texto)
- Lista de validaciones
- Lista de reglas de negocio explicadas
```

---

## 3. Cómo Diseñé el Prompt

### Estructura usada:

**a) Contexto primero:**
- Expliqué QUÉ hace la app (yo decidí esto, no la IA)
- Di funcionalidades específicas

**b) Peticiones claras:**
- Separé en 3 puntos: estructura, validaciones, reglas
- Usé listas para que sea fácil de seguir

**c) Formato definido:**
- Pedí texto simple (no código complejo)
- Solicité explicaciones en español

### Por qué funciona:

✅ **Específico:** La IA sabe exactamente qué necesito  
✅ **Estructurado:** Organizado en secciones numeradas  
✅ **Completo:** Cubre estructura + lógica de negocio  
✅ **Realista:** Basado en un proyecto que YO definí primero

---

## 4. Cómo Usaría el Resultado en el Desarrollo

### Fase 1: Validación (Antes de programar)
- Reviso si el esquema cubre todas mis funcionalidades
- Verifico que no falten tablas o relaciones
- **Ejemplo:** Si olvidé "categorías", lo detecto aquí

### Fase 2: Creación de Base de Datos
- Convierto el esquema en SQL o uso un ORM (Django, Laravel)
- Creo las tablas siguiendo el diseño propuesto
- **Ejemplo práctico:**
```sql
  CREATE TABLE tasks (
    id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    priority ENUM('baja','media','alta'),
    user_id INT REFERENCES users(id)
  );
```

### Fase 3: Validaciones en el Código
- Implemento las validaciones propuestas en mi backend
- **Ejemplo:** Si la regla dice "título obligatorio", 
  lo valido antes de guardar

### Fase 4: Lógica de Negocio
- Codifico las reglas propuestas
- **Ejemplo:** Si la regla dice "solo el creador puede eliminar", 
  escribo:
```python
  if task.user_id != current_user.id:
      return error("No autorizado")
```

### Fase 5: Documentación
- Uso las reglas de negocio para documentar mi API
- **Ejemplo:** En mi README explico que las tareas son privadas

### Ventaja principal:
La IA me da una **estructura base sólida** que yo adapto 
a mi tecnología específica (MySQL, PostgreSQL, etc.)

---

## 5. Conclusión

**Lo que hice yo:**
- Definí el proyecto y sus funcionalidades

**Lo que hizo la IA:**
- Estructuró la base de datos
- Propuso validaciones técnicas
- Sugirió reglas de negocio

**Resultado:**
Un punto de partida profesional que acelera el desarrollo, 
pero siempre requiere mi revisión y adaptación al proyecto real.