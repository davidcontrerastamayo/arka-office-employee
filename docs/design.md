# Design — Editorial MVP

## Objetivo
Construir un MVP usable (web) donde un usuario pueda crear un libro asistido por IA, ver un catálogo/listado de libros y filtrar y categorizar libros.

## Flujo
1. Crear libro asistido por IA (título, sinopsis, categoría, capítulos).
2. Ver catálogo/listado de libros.
3. Filtrar y categorizar libros.

## Pantallas
### Crear con IA
- Layout: Formulario corto (idea/prompt) → generar borrador → editar → guardar.
- CTA: Crear libro.
- Estados: 
  - Empty: Formulario vacío.
  - Loading: Generando borrador.
  - Error: No se pudo generar el libro.
  - Success: Libro creado con éxito.

### Catálogo
- Layout: Lista de libros.
- Filtros por categoría.
- Estados: 
  - Empty: No hay libros para mostrar.
  - Loading: Cargando libros.

### Detalle
- Layout: Ver/editar libro existente.
- Campos: título, sinopsis, categoría.
- Estados: 
  - Loading: Cargando detalles del libro.
  - Error: No se pudo cargar el libro.

## Componentes
- Reusar: Botón de crear, formulario de entrada.
- Nuevos: Componente de catálogo y detalle de libro.

## Tokens
- Archivo: `src/styles/tokens.css`
- Acento: #0f766e
- Notas de implementación: Asegurarse de aplicar tokens en la UI usando var(--color-...).