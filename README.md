# Prácticas Plexus Pablo Iglesias
Repositorio con los proyectos desarrollados durante el curso de Angular impartido por Plexus.

---

## Proyectos

### 1. `primer-proyecto`
Proyecto de aprendizaje inicial con las prácticas de prueba.

**Contenido:**
- Componentes standalone
- Directivas estructurales: `@if`, `@for`, `@switch`
- Directivas personalizadas:
  - `appAgrandar` — agranda el texto al hacer hover
  - `appContador` — cuenta los clicks sobre un elemento
  - `appMostrarRol` — muestra u oculta elementos según el rol del usuario
  - `appAutoFocus` — enfoca un input automáticamente al cargar

---

### 2. `primera-practica`
Aplicación web con múltiples páginas, navegación, internacionalización, consumo de API y Angular Material.

**Fase 1 — Routing**
- 3 páginas: Home, About y Contact
- Configuración de rutas con `app.routes.ts`
- Carga lazy de componentes con `loadComponent`

**Fase 2 — Componentes**
- Navbar con enlaces de navegación usando `routerLink`
- Interpolación de variables en el template
- Componente `Card` reutilizable mostrado 3 veces en Home

**Fase 3 — Estructura**
- Navbar extraído a componente propio y compartido en todas las páginas
- Footer mostrado solo en Home y Contact

**Fase 4 — Formularios**
- Formulario de contacto en la página Contact con campos: Nombre, Email y Mensaje

**Fase 5 — Internacionalización**
- Integración de `ngx-translate` para soporte multiidioma (ES/EN)
- Archivos de traducción en `public/assets/i18n/`
- Botón en el navbar para cambiar el idioma dinámicamente

**Fase 6 — Servicios y API**
- Servicio `UserService` con `HttpClient` para consumir la API `jsonplaceholder`
- Tabla de usuarios en la página About con: ID, Name, Email, Username y Phone
- Página de detalle por usuario con todos sus campos al hacer click en una fila
- Navegación dinámica con rutas parametrizadas (`/user/:id`)

**Fase 7 — Angular Material**
- Tema oscuro Magenta/Violet
- `mat-toolbar` en el navbar
- `mat-table` con estilos personalizados para la tabla de usuarios
- `mat-card` en la página de detalle de usuario y en el formulario de contacto
- `mat-form-field` e `mat-input` en el formulario de contacto

---

## Tecnologías

- [Angular 19](https://angular.dev)
- TypeScript
- SCSS
- [ngx-translate](https://github.com/ngx-translate/core)
- [Angular Material](https://material.angular.dev)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com)

---

Abrir el navegador en `http://localhost:4200`

---

## Autor

Pablo Iglesias Sánchez — Curso Angular, Plexus
