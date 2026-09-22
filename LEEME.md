# Restaurant BJ — web nueva

Una sola página con 4 apartados (menú del día, bocadillos, ofertas y carta) más
la vista de horarios. Pensada para el móvil del cliente dentro del bar.
En tres idiomas: español, català e English.

## Cómo actualizar el menú del día y los bocadillos (guía rápida)

1. Abre el archivo `js/datos.js` con cualquier editor de texto.
2. Busca **4. MENÚ DEL DÍA**. Cambia `fecha:` por la fecha de hoy: `"2026-09-22"`.
3. Debajo, cambia los nombres de `primeros:` y `segundos:`. Cada plato lleva
   tres textos: `es:` (español), `ca:` (català) y `en:` (English).
4. Cada línea acaba en coma **menos la última** de cada lista.
5. Si cambia el precio, edita `price: "12,50 €"` (coma decimal y el € al final).
6. Busca **5. BOCADILLOS DEL DÍA** y cambia el bocadillo de cada día igual.
7. Si un día no hay bocadillo, escribe `etiq: ["agotado"]` al final de esa línea.
8. Guarda el archivo y súbelo al hosting. Recarga la web en el móvil.
9. Si algo se rompe, la web enseña «Pregunta al personal por el menú de hoy»:
   revisa que no falte una coma o unas comillas y vuelve a guardar.
10. Si no sabes cómo se dice un plato en catalán o en inglés, deja solo el `es:`
    y la web enseñará el español en los tres idiomas. Nunca se queda en blanco.

## Archivos

```
index.html          la página (estructura, textos fijos, SEO)
css/estilos.css     los estilos — no hace falta tocarlo
js/app.js           la lógica — no hace falta tocarlo
js/datos.js     ★   TODO el contenido que cambia: menú, bocadillos, ofertas,
                    carta, horarios, avisos y datos de contacto
img/                fotos del local (ver img/LEEME.txt)
VERIFICACION.md     qué contenido de la web vieja está en la nueva y qué falta
```

## Códigos QR por apartado

Cada apartado tiene su propia dirección. Se pueden imprimir QR distintos:

| Dónde ponerlo        | Dirección                     |
|----------------------|-------------------------------|
| Mesas (por defecto)  | `.../index.html`              |
| Pizarra del menú     | `.../index.html#menu-del-dia` |
| Barra                | `.../index.html#bocadillos`   |
| Cartel de ofertas    | `.../index.html#ofertas`      |
| Mesas (carta larga)  | `.../index.html#carta`        |
| Puerta               | `.../index.html#horarios`     |

## Ver la web en el ordenador

Abre `index.html` con doble clic, o sirve la carpeta con cualquier servidor
estático (por ejemplo la extensión Live Server de VS Code).

## Publicar

Funciona en cualquier hosting estático, sin base de datos: GitHub Pages,
Netlify, Cloudflare Pages o el FTP de toda la vida. Solo hay que subir la
carpeta entera. Para actualizar el menú basta con volver a subir `js/datos.js`.

## Detalles técnicos

- Sin frameworks ni librerías. Sin fuentes web. Sin scripts de terceros, así que
  no hace falta banner de cookies.
- Tema claro y oscuro automáticos (`prefers-color-scheme`), con botón manual.
- La web arranca en el idioma del móvil del cliente si es uno de los tres; si
  no, en español. El selector de la cabecera manda sobre eso y se recuerda.
- El catalán se añadió después y está pendiente de que lo repase alguien del
  local. Mientras `revisarCatalan: true` en `js/datos.js`, la web lo avisa
  arriba al verla en catalán. Cuando esté revisado, cambia ese true por false.
- El cálculo de «abierto / cerrado» usa siempre la hora de Barcelona
  (`Europe/Madrid`), no la del móvil del cliente, y contempla horarios que
  pasan de medianoche.
- Animaciones de 150–340 ms, solo `transform` y `opacity`, desactivadas si el
  móvil tiene activado «reducir movimiento».
- Preparada para móviles plegables: container queries, `clamp()`, `dvh/svh`,
  `env(safe-area-inset-*)` y la Viewport Segments API como mejora progresiva.
