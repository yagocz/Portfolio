# GoyCaz Labs

Sitio de **GoyCaz Labs** (Ernesto Yago Caldas Zapata, CEO y fundador).
Estático, sin build ni dependencias. Publicado con GitHub Pages en
<https://yagocz.github.io/Portfolio/>.

## Páginas

| Archivo | Qué es |
|---|---|
| `index.html` | **Landing comercial.** Lo que mandas por WhatsApp a un cliente. |
| `perfil.html` | **Perfil técnico del fundador** (el portfolio de desarrollador, ES/EN). |

## Estructura

```
index.html              Landing de GoyCaz Labs (8 secciones)
perfil.html             Portfolio técnico de Yago (CV interactivo)
assets/css/landing.css  Estilos de la landing
assets/css/styles.css   Estilos del perfil técnico
assets/js/landing.js    Config de WhatsApp/agenda + interacciones
assets/js/data.js       Contenido del perfil técnico (ES/EN)
assets/js/main.js       Lógica del perfil técnico
assets/img/             Logo de GoyCaz Labs y foto
assets/cv/              CV en PDF
```

## Lo que vas a querer cambiar

### 1. WhatsApp y link de agenda

Todo está en las primeras líneas de **`assets/js/landing.js`**:

```js
const CONFIG = {
  whatsapp: '51994146110',                                  // tu número, solo dígitos
  mensaje:  'Hola Yago, vi tu página y quiero saber más',   // mensaje precargado
  agenda:   ''                                              // ← pega aquí tu link de calendario
};
```

Mientras `agenda` esté vacío, el botón *"Agenda tu diagnóstico gratis"* abre WhatsApp.

**Cómo sacar un calendario gratis (3 pasos):**
1. Entra a [cal.com](https://cal.com) o [calendly.com](https://calendly.com) y crea una cuenta gratis con tu correo.
2. Crea un evento de **10 minutos** llamado "Diagnóstico gratis" y conecta tu Google Calendar para que solo ofrezca horas libres.
3. Copia el link que te dan (algo como `https://cal.com/yago/diagnostico`) y pégalo en `agenda`.

### 2. Tu foto

Guarda la foto como **`assets/img/yago.jpg`** (vertical, aprox. 800×1000 px). Luego en
`index.html`, en la sección de portada: descomenta la línea del `<img>` y borra el
`<div class="photo-empty">`.

### 3. Testimonios

En `index.html`, sección `#testimonios`. Hay un ejemplo comentado listo para copiar.
Borra el bloque `tst-empty` cuando agregues el primero.
**No inventes testimonios**: un cliente los verifica en dos minutos.

## Desarrollo

No hay build. Abre `index.html` en el navegador. Para revisar cambios:

```bash
node --check assets/js/landing.js   # sintaxis
```
