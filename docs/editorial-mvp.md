# Instrucciones para correr el MVP Editorial

## Instalación

1. Clona el repositorio y navega al directorio del proyecto.
2. Ejecuta el siguiente comando para instalar las dependencias:
   ```bash
   npm install
   ```

## Ejecución

1. Para correr el servidor de desarrollo, utiliza:
   ```bash
   npm run dev
   ```

2. Accede a la aplicación en tu navegador en `http://localhost:3000`.

## Características
- Listado de publicaciones (aunque esté vacío, con un mensaje claro).
- Crear una nueva publicación que aparece en el listado.
- Editar publicaciones, donde los cambios se guardan y persisten gracias a `localStorage`.
- Funcionalidad de búsqueda o filtro por título y estado.