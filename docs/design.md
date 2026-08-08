# Design — Editorial MVP

## Objetivo
Diseñar una interfaz clara, moderna y funcional para el MVP Editorial AI, donde los usuarios puedan interactuar con el sistema para crear, visualizar y categorizar libros.

## Flujo
1. Crear un libro asistido por IA.
2. Ver catálogo de libros.
3. Filtrar libros por categorías.
4. Editar un libro existente.

## Pantallas
### Crear con IA
- **Layout**: Formulario que incluye campos para: prompt de idea, botón para generar borrador y opción para guardar el libro.
- **CTA**: Botón claro para "Crear libro".
- **Estados**: 
  - **Empty**: Mensaje indicando que no hay entradas aún.
  - **Loading**: Indicador de carga al generar el borrador.
  - **Success**: Mensaje de confirmación al guardar el libro.
  - **Error**: Mensaje de error si la creación falla. 

### Catálogo
- **Layout**: Lista/grid de libros con opciones de búsqueda y un filtro desplegable.
- **CTA**: Botón para "Agregar nuevo libro".
- **Estados**:  
  - **Empty**: Mensaje indicando que no hay libros disponibles.
  - **Loading**: Indicador de carga al buscar libros.
  - **Error**: Mensaje de error si la carga falla.

### Detalle
- **Layout**: Vista específica de un libro con campos editables: título, sinopsis, categoría y estado.
- **CTA**: Botón para "Guardar cambios".
- **Estados**:  
  - **Loading**: Indicador de carga al realizar cambios.
  - **Success**: Mensaje de confirmación al guardar cambios.
  - **Error**: Mensaje de error si la edición falla.

## Componentes
- Reusar: Input, Botones, Lista de Libros.
- Nuevos: Filtro de Categorías, Indicadores de carga.

## Tokens
- Archivo: `src/styles/tokens.css`
- Acento: `--color-accent` utilizado en botones principales y elementos destacados.
- Notas de implementación: Asegurarse de que todos los colores y espaciados sigan los tokens definidos para una consistencia visual.