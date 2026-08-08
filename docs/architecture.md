# Architecture — Editorial MVP

## Objetivo
Construir un MVP usable en el que los usuarios puedan crear, ver y organizar libros asistidos por IA.

## IN / OUT
- IN: creación de libros, visualización de catálogo, filtrado.
- OUT: pagos, colaboración multi-usuario, integración avanzada de IA.

## Dominio
### Libro
- Campos: id, título, sinopsis, categoría, estado (draft | published), createdAt, capítulos, portada.
- Estados: draft | published
- Reglas: cada libro debe tener un título, al menos una sinopsis, y un estado.

## Flujos
1. Crear con IA → formulario corto → generación de borrador → editar → guardar
2. Catálogo → buscar libros → filtrar por categoría
3. Detalle → ver/editar campos → cambiar categoría/estado

## Pantallas
| Pantalla | Propósito | Datos |
|----------|-----------|-------|
| Crear    | Crear un libro con ayuda de IA | prompt, borrador generado |
| Catálogo | Listar todos los libros creados | libros en listado/grid |
| Detalle  | Editar información del libro | campos editables de libro |

## Contratos
### CreateBookFromPrompt
- Input: { prompt: string }
- Output: { id, title, synopsis, category, chapters[], createdAt }
- Errores: validaciones de no vacío, formato de campo, etc.

### Persistencia
- Dónde se guarda: localStorage o en estado en memoria.
- Shape JSON: { id, title, synopsis, category, state, chapters[], createdAt }

## IA
- En MVP: mock determinista para generar un borrador.
- Fallback si falla.

## Decisiones
| Decisión | Elegido | Alternativa | Motivo |
|----------|---------|-------------|--------|
| Persistencia | localStorage | memoria | persistir entre recargas |
| IA generativa | mock | LLM real | simplificación para MVP |

## Plan de implementación (para engineering)
1. Implementar modelo y persistencia del Libro.
2. Desarrollo de las pantallas Crear y Catálogo.
3. Implementar vista Detalle.

## Criterios de aceptación
- [ ] Crear libro desde prompt.
- [ ] Ver libro en catálogo.
- [ ] Filtrar libros por categoría.
- [ ] Empty states claros.