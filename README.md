# Restaurant BJ — Web

Web sencilla para Restaurant BJ (Vila Olímpica, Barcelona). Una página, dos idiomas (ES/EN), pensada para que actualizar el menú del día cueste menos de 2 minutos.

## Estructura

```
├── index.html        ← La página (estructura y textos fijos)
├── css/style.css     ← Estilos (colores, tipografía)
├── js/main.js        ← Lógica (idiomas, pintar el menú) — no tocar
├── data/menu.js      ← ★ EL MENÚ — el único archivo del día a día
├── photos/           ← Fotos del local y los platos
└── GAME-PLAN.md      ← Plan del proyecto
```

## Cómo actualizar el menú del día

1. Abrir `data/menu.js`
2. Cambiar los platos de `primeros` y `segundos`, y la oferta de `bocadilloDelDia`
3. Cambiar la fecha en `updated`
4. Guardar. Listo.

## Pendiente antes de publicar

- [ ] Fotos en `photos/` (menú del día, bocadillo, café, local, familia)
- [ ] Precio real del menú del día (`data/menu.js`)
- [ ] Carta real (`data/menu.js`)
- [ ] Horario (`index.html`, buscar "PENDIENTE")
- [ ] Número de WhatsApp (`index.html`, buscar "wa.me")
- [ ] Texto de la historia familiar (`index.html`, sección "La casa")

## Ver la web en local

Abrir `index.html` con doble clic en cualquier navegador. Sin instalaciones.

## Publicar (cuando esté lista)

Opción recomendada: GitHub Pages — gratis, se activa en Settings → Pages del repositorio.
