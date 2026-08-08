# Design — MVP Editorial AI

## Objetivo
Diseñar la interfaz de usuario para el MVP que facilite la creación y organización de libros mediante IA.

## Flujo
1. Usuario autentica su acceso si es necesario.
2. Usuario ingresa un prompt para crear un libro.
3. Se genera un borrador de libro basado en el prompt.
4. Usuario edita el libro generando el resultado final.
5. Usuario visualiza el catálogo de libros creados.
6. Usuario filtra libros por categoría.
7. Usuario abre un libro para editarlo, cambiando su estado o categoría.

## Pantallas
### Crear con IA
- **Layout**: Formulario simple con campo para el ideario/prompt y un botón de "Generar".
- **CTA**: Botón "Generar Borrador".
- **Estados**: Al generar el borrador, mostrar feedback de éxito o error según la respuesta.

### Catálogo
- **Layout**: Grid/lists, filtro por categorías y búsqueda por texto.
- **Empty State**: Mensaje "No hay libros disponibles".
- **Loading State**: Indicador de carga mientras se recuperan los libros.
- **Error State**: Mensaje de error si la carga falla.

### Detalle
- **Layout**: Formulario editable con campos para título, sinopsis, categorías y estado.
- **CTA**: Botón "Guardar Cambios".

## Componentes
- Reusar: Botones, Inputs.
- Nuevos: Filtros de búsqueda.

## Tokens
- Archivo: `src/styles/tokens.css`
- Acento: Color principal para botones y destacados `#0f766e`.
- Notas de implementación: Asegurarse de que los tokens sean consistentes en todo el diseño.