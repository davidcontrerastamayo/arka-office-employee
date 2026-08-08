# Orden — MVP Editorial AI

MVP Editorial AI — app web para crear y organizar libros con ayuda de IA.

## Objetivo
Construir un MVP usable (web) en **este repositorio del workspace** donde un usuario pueda:
1) crear un libro asistido por IA (título, sinopsis, categoría, capítulos borrador),
2) ver un catálogo/listado de libros,
3) filtrar y categorizar libros.

## Alcance del MVP (IN)
- Autenticación: no reinventar login; asumir usuario autenticado o UI sin auth real si el template no la tiene.
- Modelo mínimo de Libro: id, título, sinopsis, categoría, estado (`draft` | `published`), createdAt, capítulos (outline 3–5), portada opcional (placeholder).
- Flujo "Crear con IA": formulario corto (idea/prompt) → generar borrador (mock o heurística local si no hay API de IA) → editar → guardar.
- Vista Catálogo: lista/grid limpia con búsqueda por texto y filtro por categoría.
- Vista Detalle: ver/editar campos; cambiar categoría/estado.
- UI moderna y limpia; copy en español.
- Persistencia: lo más simple del repo (localStorage / estado en memoria / JSON en workspace). Debe demostrar el happy path end-to-end al recargar si usas localStorage.

## Fuera de alcance (OUT)
- Pagos, colaboración multi-usuario, export EPUB/PDF, editor tipográfico avanzado.
- Generación real de ilustraciones / portadas AI.
- App mobile nativa.
- Integración LLM de producción (un mock determinista del borrador es válido en el MVP).

## Definition of done por rol (verificado por Arka)
- **Arquitectura**: DEBE crear `docs/architecture.md`. Sin ese archivo la task falla.
- **Diseño**: DEBE crear `docs/design.md` Y `src/styles/tokens.css` (importado en el CSS principal si existe). Solo Markdown = FALLA.
- **Desarrollo**: DEBE cambiar código de aplicación bajo `src/` (pantallas Crear / Catálogo / Detalle). Solo archivos en `docs/` o `Oficina/` = FALLA. Además deja `docs/editorial-mvp.md` con cómo probar.

## Categorías mínimas
Ficción, No ficción, Infantil, Poesía.

## Criterios de aceptación del producto
- Puedo crear un libro desde un prompt y verlo en el catálogo.
- Puedo filtrar por las categorías mínimas.
- Puedo abrir un libro y cambiar su categoría/estado.
- Empty states claros cuando no hay libros / no hay resultados de filtro.
- Tokens de diseño visibles en la UI (colores/spacing del `tokens.css`).

## Calidad
Priorizar demo clara sobre features. Una composición limpia por pantalla, un CTA primario obvio. Diseño y código alineados al brief; no inventar pantallas fuera de alcance.