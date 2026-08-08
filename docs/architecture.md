# Architecture — Editorial MVP

## Objetivo
Construir un MVP web de gestión editorial en el repo del proyecto: catálogo de publicaciones, detalle y flujo básico de creación/edición.

## IN / OUT
- IN: listado de publicaciones, detalle de publicaciones, creación/edición de publicaciones.
- OUT: CMS, autenticación, multi-tenant, API remota.

## Dominio
### Publicación
- Campos: id, title, status, date, author, content.
- Estados: draft | published
- Reglas: una publicación debe tener un título y un autor.

## Flujos
1. Crear publicación → guardar → listar
2. Listar → abrir detalle
3. Detalle → editar → guardar cambios

## Pantallas
| Pantalla | Propósito | Datos |
|----------|-----------|-------|
| Listado de Publicaciones | Mostrar publicaciones | id, title, status, date, author |
| Detalle de Publicación | Mostrar detalle de una publicación | publication |

## Contratos
### CreatePublication
- Input: { title: string, status: string, date: string, author: string, content: string }
- Output: { id: string, title: string, status: string, date: string, author: string, content: string }
- Errores: título y autor son obligatorios.

### Persistencia
- Dónde se guarda: localStorage
- Shape JSON: { id, title, status, date, author, content }

## Decisiones
| Decisión | Elegido | Alternativa | Motivo |
|----------|---------|-------------|--------|
| Stack | React con Vite | Otro stack | Ya presente en el repo. |

## Plan de implementación (para engineering)
1. Crear flujo de listado y detalle.
2. Implementar lógica de creación/edición de publicaciones.
3. Asegurar persistencia en localStorage.

## Criterios de aceptación
- [ ] Listado de publicaciones se muestra correctamente.
- [ ] Vista de detalle funciona y muestra datos.