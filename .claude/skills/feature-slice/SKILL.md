---
name: vertical-slice-implementation
description: Implementa un slice vertical pequeño de punta a punta con requisitos claros y mínimos.
---

# Instrucciones para la Implementación del Vertical Slice

## 1. Definición del Slice
- Este slice debe abarcar desde la interfaz de usuario (UI) hasta la lógica de dominio y la API necesaria.
- Asegúrate de que se cumpla el criterio de aceptación explícito establecido.

## 2. UI Mínima
- Si aplica, desarrolla una UI mínima que permita la interacción con el slice.
- Utiliza componentes reutilizables para evitar redundancia y fomentar la consistencia.

## 3. Desarrollo de Dominio/API
- Identifica las entidades de dominio necesarias para este slice.
- Implementa la API requerida para el funcionamiento del slice, asegurando su funcionalidad y eficiencia.

## 4. Criterios de Aceptación
- Documenta claramente los criterios de aceptación para que sean utilizables en las pruebas.
- Asegúrate de que todos los criterios estén cumplidos antes de considerar el slice como completo.

## 5. Verificación y Usabilidad
- Una vez el slice esté desarrollado, realiza pruebas para asegurar su usabilidad.
- Confirma que no haya deuda bloqueante que impida su uso o verificación.

## 6. Fuera de Alcance
- No involucres refactors amplios, el marketplace o características no solicitadas en este slice.

## Entregables
- Código del slice completamente funcional.
- Documentación que incluya los criterios de aceptación y notas de desarrollo.
