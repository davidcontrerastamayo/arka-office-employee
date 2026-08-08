# Architecture — MVP Editorial AI

## Objetivo
Construir un MVP usable (web) donde los usuarios puedan crear, visualizar y categorizar libros usando IA.

## IN / OUT
- IN: Crear libro con IA, ver catálogo, filtrar libros, editar libro.
- OUT: Pagos, colaboración multiusuario, exportar, integración LLM real.

## Dominio
### Libro
- Campos: id, título, sinopsis, categoría, estado, createdAt, capítulos, portada.
- Estados: draft | published
- Reglas: El libro debe tener un estado que determine si está en borrador o publicado.

## Flujos
1. Crear con IA (mock) → editar → guardar
2. Catálogo → filtrar → abrir detalle
3. Detalle → editar categoría/estado

## Pantallas
| Pantalla  | Propósito                                   | Datos                               |
|-----------|---------------------------------------------|-------------------------------------|
| Crear     | Crear un libro asistido por IA              | { prompt: string }                  |
| Catálogo  | Listar y filtrar libros                     | { libros: [id, título, categoría]} |
| Detalle   | Editar un libro existente                   | { id, título, sinopsis, categoría}  |

## Contratos
### CreateBookFromPrompt
- Input: { prompt: string }
- Output: { title, synopsis, category, chapters[] }
- Errores: { validation_error, unable_to_generate }

### Persistencia
- Dónde se guarda: localStorage
- Shape JSON: { id, title, synopsis, category, state, createdAt, chapters[], cover }

## IA
- En MVP: mock determinista (no LLM real obligatorio)
- Fallback si falla: texto predefinido o error mostrado al usuario.

## Decisiones
| Decisión                        | Elegido                     | Alternativa              | Motivo                                      |
|---------------------------------|----------------------------|-------------------------|---------------------------------------------|
| Persistencia                   | localStorage               | estado en memoria        | localStorage permite persistencia fácil     |
| Mock de IA                     | heurística local           | API real                 | Control total sobre la respuesta en MVP     |

## Plan de implementación (para engineering)
1. Tokens + shell de navegación
2. Persistencia + modelo Libro
3. Crear / Catálogo / Detalle

## Criterios de aceptación
- [ ] Puedo crear un libro desde un prompt y verlo en el catálogo.
- [ ] Puedo filtrar por las categorías mínimas.
- [ ] Puedo abrir un libro y cambiar su categoría/estado.
- [ ] Empty states claros cuando no hay libros / no hay resultados de filtro.
- [ ] Tokens de diseño visibles en la UI.