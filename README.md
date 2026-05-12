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
- Pipes integrados de Angular: `uppercase`, `lowercase`, `titlecase`, `date`, `currency`, `percent`, `slice`, `json`
- Pipes personalizados:
  - `saludo` — transforma un nombre en un saludo
  - `doble` — duplica un número
  - `resaltar` — devuelve texto en negrita
  - `edad` — calcula la edad a partir de una fecha de nacimiento

---

### 2. `primera-practica`
Aplicación web completa con múltiples páginas, navegación, internacionalización, consumo de API, Angular Material, guards, interceptores, signals y animaciones.

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
- Filtros por nombre (input) y ciudad (select) usando Signals y `computed()`
- Página de detalle por usuario con todos sus campos al hacer click en una fila
- Navegación dinámica con rutas parametrizadas (`/user/:id`)

**Fase 7 — Angular Material**
- Tema oscuro Magenta/Violet
- `mat-toolbar` en el navbar
- `mat-table` con estilos personalizados para la tabla de usuarios
- `mat-card` en la página de detalle de usuario y en el formulario de contacto
- `mat-form-field` e `mat-input` en el formulario de contacto

**Fase 8 — Guards**
- Guard `authGuard` con `CanActivate` para proteger la ruta `/admin`
- Página de login con formulario y almacenamiento de token en `localStorage`
- Funcionalidad de iniciar/cerrar sesión en el navbar
- Backend simulado con `json-server` para validar credenciales

**Fase 9 — Interceptores**
- `authInterceptor` — añade token Bearer a todas las peticiones HTTP
- `loggerInterceptor` — muestra método, URL y respuesta en consola
- `errorInterceptor` — manejo global de errores con redirección al login en error 401
- `loadingInterceptor` — spinner global de carga usando `BehaviorSubject`
- `adminInterceptor` — añade cabecera `X-Admin: true` a peticiones que contienen `/admin`

**Fase 10 — Animaciones con GSAP**
- Página dedicada a animaciones en `/animaciones`
- Animaciones de entrada con `gsap.from()` y `gsap.to()`
- Secuencias con `timeline()` y `addLabel()`
- Efecto stagger en listas
- Animaciones repetitivas con `repeat` y `yoyo`
- Callbacks `onStart`, `onUpdate` y `onComplete`
- Control manual del timeline con botones (`play`, `pause`, `reverse`)
- Animación al hacer click con evento de usuario
- Barra de progreso de scroll con `ScrollTrigger`
- Efecto de seguimiento del ratón con `quickSetter`
- Animaciones responsivas con `gsap.matchMedia()`
- Limpieza de animaciones en `ngOnDestroy`

---

### 3. `practica-sse`
Aplicación para practicar Server-Sent Events (SSE) en tiempo real.

**Contenido:**
- Servidor Node.js que emite eventos SSE cada segundo
- Conexión SSE con `EventSource` desde Angular
- Muestra de mensajes en tiempo real en una lista
- Parseo de JSON recibido desde el servidor
- Manejo de errores con `onerror`
- Servicio `SseService` que encapsula `EventSource`
- Conversión de SSE a `Observable` de RxJS
- Cierre de conexión en `ngOnDestroy` con `unsubscribe()`
- Escucha de eventos personalizados con `addEventListener('progress', ...)`

---

### 4. `practica-websockets`
Aplicación para practicar WebSockets bidireccionales en tiempo real.

**Contenido:**
- Servidor Node.js con la librería `ws` que emite y recibe mensajes
- Conexión WebSocket con `webSocket` de RxJS desde Angular
- Muestra de mensajes recibidos en tiempo real en una lista
- Envío de mensajes al servidor con `socket$.next()`
- Manejo de apertura y cierre con `openObserver` y `closeObserver`
- Manejo de errores en el subscribe
- Servicio `WebsocketService` que encapsula la conexión y la reutiliza
- Interfaz `SocketMessage` para tipar los mensajes
- Cierre de conexión en `ngOnDestroy` con `unsubscribe()`
- Filtrado de mensajes por tipo (`chat`, `notification`) usando `filter` de RxJS

---

## Tecnologías

- [Angular 19](https://angular.dev)
- TypeScript
- SCSS / CSS
- [ngx-translate](https://github.com/ngx-translate/core)
- [Angular Material](https://material.angular.dev)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com)
- [json-server](https://github.com/typicode/json-server)
- [GSAP](https://gsap.com)
- Node.js (servidores SSE y WebSockets)
- RxJS

---

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Entrar en el proyecto
cd primer-proyecto  # o primera-practica, practica-sse, practica-websockets

# Instalar dependencias
npm install

# Arrancar el servidor de desarrollo
ng serve
```

**Para `primera-practica`** también necesitas json-server:
```bash
npx json-server --watch db.json --port 3000
```

**Para `practica-sse`** también necesitas el servidor SSE:
```bash
node server.js
```

**Para `practica-websockets`** también necesitas el servidor WebSocket:
```bash
node server.js
```

Abrir el navegador en `http://localhost:4200`

---

## Autor

Pablo Iglesias Sánchez — Curso Angular, Plexus
