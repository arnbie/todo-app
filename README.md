# ToDo App 🚀

## Bienvenido a la **ToDo App**
Una aplicación sencilla pero poderosa para gestionar tus tareas diarias. Este proyecto combina un backend en **Flask** con un frontend en **React**, ofreciendo una experiencia fluida y moderna.

---

## Características principales ✨

- **Gestión de tareas**: Añade, edita, marca como completadas y elimina tareas.
- **Interfaz intuitiva**: Diseño minimalista y fácil de usar.
- **Filtrado de tareas**: Filtra tareas por "Todas", "Pendientes" o "Completadas".
- **Persistencia de datos**: Las tareas se almacenan en una base de datos **SQLite**.
- **Responsive**: Diseño adaptable a dispositivos móviles y de escritorio.

---

## Tecnologías utilizadas 🛠️

### Backend (Flask)
- **Flask**: Framework web en Python para crear la API.
- **SQLite**: Base de datos ligera para almacenar las tareas.
- **Flask-CORS**: Para permitir solicitudes desde el frontend.

### Frontend (React)
- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para el frontend.
- **Tailwind CSS**: Framework de CSS para estilos modernos y responsivos.
- **Axios**: Librería para hacer peticiones HTTP a la API.

---

## Estructura del proyecto 📂
```
todo-app/
├── backend/  # Código del backend (Flask)
│   ├── app.py  # Punto de entrada de la API
│   ├── database.py  # Configuración de la base de datos
│   └── requirements.txt  # Dependencias del backend
├── frontend/  # Código del frontend (React)
│   ├── src/  # Código fuente de React
│   │   ├── api/  # Servicios para interactuar con la API
│   │   ├── components/  # Componentes reutilizables
│   │   ├── App.jsx  # Componente principal
│   │   └── main.jsx  # Punto de entrada de la aplicación
│   ├── public/  # Archivos estáticos
│   ├── index.html  # Plantilla HTML
│   └── vite.config.js  # Configuración de Vite
├── README.md  # Este archivo
└── .gitignore  # Archivos y carpetas ignorados por Git
```

---

## Cómo ejecutar el proyecto 🚀

### Requisitos previos
- **Python 3.x**: Para el backend.
- **Node.js**: Para el frontend.
- **Git**: Para clonar el repositorio.

### Pasos para ejecutar el backend

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/todo-app.git
   cd todo-app/backend
   ```
2. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```
3. Inicia el servidor Flask:
   ```bash
   python app.py
   ```
   El backend estará disponible en **http://127.0.0.1:5000**.

### Pasos para ejecutar el frontend

1. Navega a la carpeta del frontend:
   ```bash
   cd ../frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   El frontend estará disponible en **http://localhost:5173**.

---

## Endpoints de la API 📡

El backend expone los siguientes endpoints:

- `GET /tasks`: Obtener todas las tareas.
- `GET /tasks/<id>`: Obtener una tarea por su ID.
- `POST /tasks`: Crear una nueva tarea.
- `PUT /tasks/<id>`: Actualizar una tarea existente.
- `DELETE /tasks/<id>`: Eliminar una tarea.

---

## Contribuir 🤝

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Haz commit de tus cambios:
   ```bash
   git commit -m 'Añadir nueva funcionalidad'
   ```
4. Haz push a la rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request.

---

## Licencia 📄
Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## Autor ✒️

**Arnbie** - [GitHub](https://github.com/tu-usuario)

¡Gracias por usar la **ToDo App**! Esperamos que te sea útil. 😊


