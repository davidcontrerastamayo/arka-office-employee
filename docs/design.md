# Design — Editorial MVP

## Objetivo
Construir un MVP usable en el que los usuarios puedan crear, visualizar y categorizar libros utilizando IA.

## Flujo
1. Crear un libro asistido por IA (título, sinopsis, categoría, capítulos borrador).
2. Ver un catálogo/listado de libros.
3. Filtrar y categorizar libros.

## Pantallas
### Crear con IA
- Layout simple con un campo de texto para ingresar el prompt y un botón de generar.
- Estados: vacío (sin entrada), loading (esperando respuesta), success (libro creado), error (mensaje de error si no se puede crear).

### Catálogo
- Layout con listado de libros en forma de grid, cada libro presentado con título y categoría.
- Estados: empty (mensaje si no hay libros), loading (esperando datos), error (si ocurre un error al cargar).

### Detalle
- Mostrar información del libro seleccionado: título, sinopsis, categoría, estado y capítulos.
- Botones para editar y cambiar estado/categoría.
- Estados: loading (esperando datos), error (si ocurre un error al cargar).

## Componentes
- Reusar: Inputs, Botones.
- Nuevos: Componente libro (para mostrar en el catálogo).

## Tokens
- Archivo: `src/styles/tokens.css`
- Acento: `--color-accent: #0f766e;`
- Notas de implementación: Asegurarse de utilizar los tokens de color y espaciado en todas las pantallas y componentes.