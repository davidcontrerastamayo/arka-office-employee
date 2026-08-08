# Design — Editorial MVP

## Objetivo
Construir un MVP web de gestión editorial que permita listar, crear y editar publicaciones.

## Flujo
1. Listar publicaciones.
2. Ver detalle de una publicación.
3. Crear y editar publicación.

## Pantallas
### Crear / Editar Publicación
- Layout: Formulario sencillo con campos para título, estado, fecha y autor.
- CTA: Botón de "Guardar".

### Catálogo
- Layout: Listado de publicaciones con título, estado, fecha, autor y botón "Editar".
- Empty state: Mensaje indicando que no hay publicaciones disponibles.

### Detalle
- Layout: Mostrar todos los detalles de la publicación seleccionada.
- Editar categoría-estado.

## Componentes
- Reusar: PublicationList, PublicationDetail, EditPublicationForm.
- Nuevos: Ninguno.

## Tokens
- Archivo: `src/styles/tokens.css`
- Acento: `--color-accent`
- Notas de implementación: Usar las variables de CSS para todos los estilos.