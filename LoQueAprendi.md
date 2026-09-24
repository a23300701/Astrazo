# Texto crudo sin IA
Astro es un framework y esto es lo primero que he hecho y agradezco porque así entendí un poco más las cosas. Todo es como por piezas y, en este caso, los componentes son cosas reutilizables y los layouts se utilizan para no repetir código. Solo se manda el JavaScript al navegador cuando solo se pide. El resto es puro HTML. Esto es, se le llama arquitectura de islas. Obviamente, todo lo estamos haciendo en src y cada una tiene su funcionalidad. En el componente, que es el header, el footer, navigation, social, blog post, theme icon, hamburger, es todo lo que se va a reutilizar para cada página. Los layouts ya son los moldes. Base layout es como en sí la view final. En base layout metes todo, header, footer, navigation, social, blog post, theme icon. Y markdown post layout también ayuda, también es el molde. Pages no hay nada más que agregar, son las páginas reales. En este caso, tags, index, about, etcétera. Los scripts es el JavaScript y los styles es el CSS. Los layouts se mantienen todos, son el molde. Y aquí esto ayuda mucho a no repetir código a cada rato, vas reutilizando. Eh, base layout, como ya lo dije, es la página donde metes todo y vas reutilizando. Cabe recalcar que slot es donde vaya la información declarada en la página web, lo que hay en específico dentro de cada página. Markdown post layout es el molde donde al abrir un post se muestra cuando se publicó, la descripción, la imagen, es como el iniciador. Ahí se pone el nombre de la página, el nombre, etcétera. En posts

# Mis Apuntes de Astro — Arquitectura y Moldes 

Esto lo escribo para mí, para recordar cómo funciona la estructura del proyecto y por qué cada carpeta tiene su propósito claro.

---

## Concepto clave: Todo por piezas
Astro es un *framework* y esto es lo primero que he hecho. Me ayudó mucho a entender las cosas porque todo funciona **por piezas**:
* **Componentes:** Son las cosas reutilizables que metes en cada página.
* **Layouts:** Son los moldes principales que se utilizan para no repetir código a cada rato.
* **Arquitectura de Islas:** Solo se manda JavaScript al navegador cuando de verdad se pide (interactividad explícita). El resto del sitio es puro HTML superrápido.

---

## Organización dentro de `src/`

Todo el código vive dentro de `src/` y cada parte tiene su función específica:

### 1. Componentes (`src/components/`)
Aquí van todas las piezas pequeñas que vas a estar reutilizando en distintas páginas:
* `Header.astro`
* `Footer.astro`
* `Navigation.astro`
* `Social.astro`
* `BlogPost.astro`
* `ThemeIcon.astro`
* `Hamburger.astro`

### 2. Layouts — Los moldes (`src/layouts/`)
Los layouts se mantienen siempre como la plantilla base para ahorrar código.

* **`BaseLayout.astro`:** Es prácticamente la *view* final. En `BaseLayout` metes todo el armado general (`Header`, `Footer`, `Navigation`, `Social`, etc.).
  * **El `<slot />`:** Es una de las partes más importantes. El `<slot />` es el hueco exacto donde se inyecta la información declarada en la página web específica (lo que cambia de una página a otra).
* **`MarkdownPostLayout.astro`:** Es el molde "iniciador" cuando abres una publicación. Muestra los metadatos del post: cuando se publicó, la descripción, la imagen, el autor, etc.

### 3. Pages (`src/pages/`)
No hay mucho más que agregar: son las **páginas reales** del sitio.
* `index.astro` (página principal)
* `about.astro` (acerca de mí)
* `tags/` (filtrado por etiquetas)
* `posts/` (las publicaciones individuales en Markdown)

### 4. Scripts y Styles
* **`src/scripts/`:** El JavaScript para la lógica interactiva (como el menú hamburguesa).
* **`src/styles/`:** El CSS de toda la vida para darle estilo a la aplicación.