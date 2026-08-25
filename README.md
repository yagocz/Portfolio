# Portfolio — Yago Caldas

Sitio personal: **https://yagocz.github.io/Portfolio/**

Estático, sin build, sin dependencias. HTML + CSS + JS vanilla servido por GitHub Pages.

## Estructura

```
index.html            Estructura de la página (solo esqueleto + strings por defecto)
assets/css/styles.css Estilos. Tema claro/oscuro, responsive, print (Descargar CV)
assets/js/data.js     TODO el contenido, en ES y EN (experiencia, proyectos, skills…)
assets/js/main.js     i18n, tema, render, micro-interacciones
assets/cv/            PDF del CV (enlazado desde "Descargar CV"; ruta en data.js → meta.cv)
```

## Actualizar el CV

Editar únicamente `assets/js/data.js`:

- `es` / `en` → textos en cada idioma (misma estructura en ambos).
- `tech` → stack por empresa (compartido entre idiomas).
- `projectsMeta` → proyectos (url, tags); su descripción va en `es.projects.items` / `en.projects.items`.
- `skills` → categorías y chips.

## Funcionalidades

- Idioma ES/EN con detección del navegador y persistencia en `localStorage`.
- Tema claro/oscuro con detección del sistema y persistencia; sin flash al cargar.
- "Copiar email" con feedback, "Descargar CV" descarga el PDF de `assets/cv/` (por idioma, con fallback a ES). La página también tiene estilos de impresión (Ctrl+P) con todos los logros expandidos.
- Logros de cada puesto colapsados a 3, con expansión.
- Animaciones sutiles (entrada del hero, reveal al scroll) desactivadas con `prefers-reduced-motion`.
- SEO: Open Graph, JSON-LD `Person`, canonical.

## Desarrollo local

Abrir `index.html` en el navegador o servir la carpeta con cualquier servidor estático (`python -m http.server`).
