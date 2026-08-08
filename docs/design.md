# Design — Editorial MVP

## Objetivo
Construir una interfaz clara y moderna para la app web del MVP Editorial AI, donde los usuarios puedan fácilmente crear y organizar libros asistidos por IA.

## Flujo
1. Crear un libro asistido por IA: el usuario ingresa un prompt, genera un borrador, edita y guarda.
2. Visualizar el catálogo: el usuario puede ver todos los libros creados, con opción de búsqueda y filtrado por categoría.
3. Editar detalles del libro: el usuario puede ver y editar la información de cada libro individualmente.

## Pantallas
### Crear con IA
- **Layout**: Formulario corto con un campo de texto para prompt.
- **CTA**: Botón "Generar borrador".
- **Estados**: 
  - **empty**: No hay prompt ingresado.
  - **loading**: Esperando respuesta de IA.
  - **success**: Borrador generado con información editable.
  - **error**: Mensaje de error si falla la generación.

### Catálogo
- **Layout**: Grid o lista de libros con opción de búsqueda en la parte superior.
- **Filtros**: Categorías visibles para filtrar.
- **Estados**:  
  - **empty**: Mensaje que indica que no hay libros creados.
  - **loading**: Indicador mientras se cargan los libros.
  - **success**: Listado de libros visible.
  - **error**: Mensaje si ocurre un error al cargar.

### Detalle
- **Layout**: Campos editables para título, sinopsis y categoría.
- **CTA**: Botón para "Guardar cambios" y opción para "Eliminar libro".
- **Estados**:  
  - **empty**: Mensaje para indicar que no se puede editar si no hay información.
  - **loading**: Cargando los detalles del libro.
  - **success**: Detalles cargados y editables.
  - **error**: Mensaje si falla la carga.

## Componentes
- **Reusar**: Botones de acción, formularios de entrada.
- **Nuevos**: Componente de visualización de categorías.

## Tokens
- Archivo: `src/styles/tokens.css`
- Acento: color principal de la UI.
- Notas de implementación: Asegurarse de usar variables de CSS en todos los componentes para asegurar consistencia.