MVP Editorial AI — app web para crear y organizar libros con ayuda de IA.

## Objetivo
Construir un MVP usable (web) donde un usuario pueda:
1) crear un libro asistido por IA (título, sinopsis, categoría, capítulos borrador),
2) ver un catálogo/listado de libros,
3) filtrar y categorizar libros.

## Alcance del MVP (IN)
- Autenticación ya existente del producto: no reinventar login; asumir usuario autenticado.
- Modelo mínimo de Libro: título, sinopsis, categoría (enum o tags), estado (draft/published), fecha de creación, opcional portada (placeholder).
- Flujo "Crear con IA": formulario corto (idea/prompt del libro) → generar borrador (título + sinopsis + categoría sugerida + outline de 3–5 capítulos) → usuario puede editar → guardar.
- Vista Catálogo: grid/lista limpia con búsqueda por texto y filtro por categoría.
- Vista Detalle de libro: ver/editar campos básicos; marcar categoría; publicar/borrador.
- UI moderna, limpia, accesible; copy en español (i18n-ready si el proyecto ya usa i18n).
- Persistencia: usar el stack del repo (Convex u storage local del workspace según lo que ya exista). Preferir lo más simple que demuestre el flujo end-to-end.

## Fuera de alcance (OUT)
- Pagos, colaboración multi-usuario, export EPUB/PDF, editor tipográfico avanzado.
- Generación de ilustraciones reales / portadas AI.
- App mobile nativa.
- Multi-idioma completo (solo es en UI del MVP está OK si i18n aún no está cableado en esta feature).

## Roles y entregables
- **Arquitectura / Product** (`docs/architecture.md`): dominio Libro, pantallas, contratos de datos, decisiones de stack mínimas, riesgos y plan de implementación en 1 slice.
- **Diseño** (`docs/design.md`): flujo + specs de pantallas (Crear con IA, Catálogo, Detalle) con empty/loading/error/success, jerarquía limpia, componentes a reutilizar/crear.
- **Desarrollo**: implementar el MVP según architecture + design, design system (shadcn), TypeScript strict, happy path funcionando. Cómo probar en `docs/editorial-mvp.md`.

## Categorías mínimas
Ficción, No ficción, Infantil, Poesía (extensible después).

## Criterios de aceptación
- Puedo crear un libro desde un prompt y verlo en el catálogo.
- Puedo filtrar por las categorías mínimas.
- Puedo abrir un libro y cambiar su categoría/estado.
- Empty states claros cuando no hay libros / no hay resultados de filtro.
- Código tipado, UI coherente; docs de architecture/design/prueba en el repo.

## Calidad
Priorizar claridad y velocidad de demo sobre features. Una composición limpia por pantalla, un CTA primario obvio, sin decoración innecesaria. Diseño y código deben alinearse: no inventar pantallas fuera del brief.