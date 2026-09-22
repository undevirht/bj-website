# Tabla de verificación — web actual → web nueva

Origen revisado: `bj-website/index.html`, `bj-website/carta.html`,
`bj-website/data/menu.js`, `bj-website/css/style.css`, `bj-website/js/main.js`.
(`README.md` y `GAME-PLAN.md` son notas internas, no contenido publicado.)

**Comprobación automática:** los 137 elementos con nombre y precio de la web
actual están en la nueva, con el mismo texto y en el mismo orden. Ninguno falta
y no se ha añadido ninguno inventado.

---

## 1. Cabecera y textos generales

| Elemento de la web actual | Dónde está ahora | Estado |
|---|---|---|
| `<title>` y meta description | `index.html` (reescritos con la dirección real) | OK |
| Logo / nombre «Restaurant BJ» | Cabecera, `.marca` | OK |
| Botón de idioma ES/EN | Cabecera, `#sel-idioma`: ahora es una lista con los tres idiomas (ES · CA · EN) | OK |
| Botón de tema claro/oscuro | Cabecera, `#btn-tema` (ahora además automático) | OK |
| H1 «Comida casera, rápida y honesta» / «Honest, fast, homemade food» | `datos.js` → `local.lema`, pie de página | OK |
| «A 2 minutos de la UPF Ciutadella · Vila Olímpica, Barcelona» | `datos.js` → `local.ubicacionCorta`, pie de página | OK |
| Botón «Ver el menú de hoy» | Ya no hace falta: el menú del día es la vista por defecto y tiene su pestaña en la barra inferior | OK |
| — | Indicador «Abierto ahora · cierra a las 23:00» (nuevo, pedido en el encargo) | OK |

## 2. Menú del día

| Elemento de la web actual | Dónde está ahora | Estado |
|---|---|---|
| Sección «Menú de hoy» / «Today's menu» | Vista `#menu-del-dia` (por defecto) | OK |
| «Actualizado: 2026-09-21» | `menuDelDia.fecha`, en el subtítulo. Si la fecha no es la de hoy se muestra la fecha real del menú y un aviso, nunca la palabra «hoy» | OK |
| Precio `12,50 €` | `menuDelDia.price` | OK |
| «Pan, bebida y postre o café incluidos» | `menuDelDia.incluye` | OK |
| 5 primeros (Ensalada con atún, Ravioli a la napolitana, Rollitos de primavera, Arroz tres delicias, Tortilla con chorizo) | `menuDelDia.primeros`, literal y en el mismo orden | OK |
| 5 segundos (Galta al horno, Solomillo de cerdo a la plancha, Alitas de pollo rebozadas, Calamares a la romana, Bistec de ternera) | `menuDelDia.segundos`, literal y en el mismo orden | OK |
| Postres | La web actual no lista postres (van incluidos). Campo `postres: []` preparado y vacío | OK |
| Días y horas en que se sirve | `menuDelDia.servicio` | **PENDIENTE** |
| Estado vacío cuando no hay menú | Nuevo: mensaje claro + enlace a la carta | OK |

## 3. Bocadillos del día

| Elemento de la web actual | Dónde está ahora | Estado |
|---|---|---|
| «Bocadillo del día» / «Sandwich of the day» | Vista `#bocadillos` | OK |
| Precio `3,00 €` | `bocadillos.price` | OK |
| Lunes: Jamón o lomo | `bocadillos.dias[0]`, literal | OK |
| Martes: Tortilla de patatas casera o fuet | `bocadillos.dias[1]`, literal | OK |
| Miércoles: Pechuga de pollo o queso semi | `bocadillos.dias[2]`, literal | OK |
| Jueves: Tortilla francesa o atún | `bocadillos.dias[3]`, literal | OK |
| Viernes: Bacon o chorizo | `bocadillos.dias[4]`, literal | OK |
| Resalte del día de hoy («HOY») | Se mantiene, ahora con la hora de Barcelona | OK |
| Opciones (tipo de pan, tamaño, frío/caliente) | Campo `bocadillos.opciones` preparado y vacío | **PENDIENTE** |
| Etiquetas vegetariano / picante / novedad / agotado | Campo `etiq` preparado en cada día | **PENDIENTE** |

## 4. Menús y ofertas

| Elemento de la web actual | Dónde está ahora | Estado |
|---|---|---|
| Menú 4: bocadillo a elegir + Coca-Cola — 5,90 € | `ofertas[0].items`, literal | OK |
| Menú 5: bocadillo + queso + Coca-Cola — 6,50 € | idem | OK |
| Menú 6 (oferta de la casa): bocadillo a elegir + bebida — 8,50 € | idem | OK |
| Menú burger 1: bacon, queso y patatas + bebida — 8,00 € | idem | OK |
| Menú burger 2: bacon, queso, lechuga, tomate, patatas + bebida — 9,00 € | idem | OK |
| Menú burger 3: nuggets, patatas de luxe + bebida — 10,00 € | idem | OK |
| Desayuno: Café + pasta (croissant, magdalena o donut) — 2,50 € | `ofertas[1].items`, literal | OK |
| Desayuno: Bocadillo pequeño + café — 3,50 € | idem | OK |
| Desayuno: Bocadillo pequeño + bebida — 4,50 € | idem | OK |
| Desayuno: Café + bikini — 4,50 € | idem | OK |
| Condiciones y vigencia de cada oferta | Campos `condiciones` y `vigencia` preparados; las caducadas se ocultan solas | **PENDIENTE** |

## 5. La carta (112 platos, 9 categorías, mismo orden)

| Categoría de la web actual | Platos | Dónde está ahora | Estado |
|---|---|---|---|
| Platos combinados | 19 | `carta[0]` | OK |
| ↳ nota «Extras: + ensalada 1,50 € · + huevo 1,00 € · + arroz blanco 1,50 €» | — | `carta[0].nota` | OK |
| Tapas | 24 | `carta[1]` | OK |
| Bocadillos calientes | 22 | `carta[2]` | OK |
| ↳ nota «Dos precios = medio / entero» | — | `carta[2].nota` | OK |
| Bocadillos fríos | 11 | `carta[3]` | OK |
| ↳ nota «Dos precios = medio / entero» | — | `carta[3].nota` | OK |
| Hamburguesas | 4 | `carta[4]` | OK |
| Cervezas y vinos | 10 | `carta[5]` | OK |
| Refrescos y agua | 8 | `carta[6]` | OK |
| Cafés e infusiones | 10 | `carta[7]` | OK |
| Licores y copas | 4 | `carta[8]` | OK |
| Acordeón por categoría | — | Se mantiene, cerrado por defecto: la vista entra como una lista corta de 9 categorías y el cliente abre la que le interesa | OK |
| — | La barra de categorías (chips) y el buscador que pedía el encargo se quitaron a petición tuya: la carta se navega solo con los acordeones | OK |
| Alérgenos por plato | — | Campo `al` preparado y documentado. La web actual **no los indica**, así que no se han inventado | **PENDIENTE** |
| Leyenda de los 14 alérgenos UE y filtro | — | Programados; aparecen solos en cuanto un plato declare alérgenos | OK |

## 6. La casa, contacto y pie

| Elemento de la web actual | Dónde está ahora | Estado |
|---|---|---|
| Sección «La casa» / «About us» | Pie de página | OK |
| «Somos un negocio familiar sirviendo al barrio desde hace años…» (ES y EN) | `local.historia`, literal | OK |
| Huecos de foto exterior e interior con su texto «próximamente» | `local.fotos` (vacío) + marcador visible. **En la web actual la carpeta `photos/` no existe: no había ninguna imagen real que conservar** | **PENDIENTE** |
| Horario: Lunes 7:00–17:00 | `horarios.bar[0]`, literal | OK |
| Horario: Martes a viernes 7:00–23:00 | `horarios.bar[1..4]`, literal | OK |
| Horario: Sábado 8:00–23:00 | `horarios.bar[5]`, literal | OK |
| Horario: Domingo 9:00–16:00 | `horarios.bar[6]`, literal | OK |
| Mapa de Google incrustado (`<iframe>`) | Sustituido por un **enlace** a Google Maps, como pedía el encargo (más rápido y sin cookies de terceros) | OK |
| «Restaurant BJ · Vila Olímpica, Barcelona» | Pie, actualizado con la dirección completa que has dado | OK |
| «Si tienes alguna alergia, consulta a nuestros empleados» (`carta.html`) | Pie y vista de la carta, literal | OK |
| `carta.html` como página de QR | Ya no hace falta: cada apartado tiene su ancla (`#carta`, `#bocadillos`…) | OK |
| Teléfono | `local.telefono` (vacío) | **PENDIENTE** |
| Email | `local.email` (vacío) | **PENDIENTE** |
| WhatsApp | `local.whatsapp` (vacío) — el `README` viejo lo daba por pendiente | **PENDIENTE** |
| Redes sociales | `local.redes` (vacías) | **PENDIENTE** |
| Reservas | `local.reservas` (vacío) | **PENDIENTE** |
| Textos legales | `local.legales` (vacío) — la web actual no tenía ninguno | **PENDIENTE** |
| Avisos (festivos, vacaciones, cierres) | `DATOS.avisos` (vacío), con su hueco en la vista de horarios | **PENDIENTE** |

## 7. Erratas corregidas

Ninguna. No se ha cambiado ni un nombre de plato ni un precio.

Dos cosas **no** son erratas sino decisiones que conviene que confirmes:

- La web actual decía solo «Vila Olímpica, Barcelona». Se ha añadido la
  dirección completa que diste (Carrer de Llull, 13 · Sant Martí · 08005). El
  texto «Vila Olímpica» se conserva tal cual en el reclamo del pie.
- El mapa incrustado pasó a ser un enlace, porque el encargo lo pedía así.

---

# Lista de dudas y marcadores [PENDIENTE]

## Decisiones del proyecto que dejaste entre corchetes

1. **Idiomas.** La web actual tenía español e inglés. A petición tuya se ha
   añadido el **catalán** como tercer idioma: los 163 textos de la carta y toda
   la interfaz. Como la web actual no lo tenía, esas traducciones son nuevas y
   están **pendientes de revisión** (ver el punto 21). El selector de la
   cabecera pasó de ser un botón ES/EN a una lista con los tres idiomas.
2. **Identidad visual.** Se han mantenido los colores y el aire de la web actual
   (crema, marrón oscuro, rojo `#b3402a`, verde `#4a5d3a`, titulares en serif),
   modernizados: contraste WCAG AA comprobado en claro y en oscuro, tipografía
   fluida y más aire. Si prefieres una identidad nueva, hay que decidirla antes.
3. **Dónde se publica.** No se ha indicado. Hace falta para poner `og:url` y el
   dominio en los datos estructurados. Funciona en cualquier hosting estático.
4. **Logo.** No hay archivo de logo, solo el nombre en texto. ¿Existe un logo?

## Datos del local que faltan

5. **Teléfono** del local (para el botón de llamar y para Google).
6. **Email** de contacto.
7. **WhatsApp**: ¿hay número? El plan viejo lo daba por pendiente.
8. **Redes sociales**: ¿Instagram, Facebook, TikTok?
9. **Reservas**: ¿se aceptan? ¿por teléfono, por WhatsApp, no se aceptan?
10. **Textos legales**: aviso legal, política de privacidad y hojas de
    reclamación. La web actual no tiene ninguno.
11. **Fotos** del local y de los platos. La carpeta `photos/` de la web actual
    estaba vacía, así que no había ninguna imagen que conservar. Hacen falta al
    menos una del exterior y una del interior, y una de 1200×630 para
    `og:image`. No se han puesto fotos de banco de imágenes a propósito.

## Datos de la carta y del servicio que faltan

12. **Alérgenos plato por plato.** Es lo más importante que falta, y es
    obligatorio por normativa. La web actual solo decía «consulta a nuestros
    empleados». El campo está preparado y documentado en `datos.js`: en cuanto
    rellenes el primero, la leyenda de los 14 alérgenos y el filtro aparecen
    solos.
13. **Días y horas del menú del día.** ¿De lunes a viernes? ¿En qué franja?
    Ahora mismo está puesto lunes a viernes como supuesto marcado
    `[PENDIENTE]`, y los días que no estén en la lista enseñan el estado vacío.
14. **Horario de cocina.** ¿Es el mismo que el del bar? Si es distinto,
    se rellena `horarios.cocina` y aparece una segunda tabla.
15. **Franja horaria de los desayunos.** ¿Hasta qué hora se sirven?
16. **Vigencia de las ofertas.** ¿Alguna es solo de lunes a viernes, o solo a
    ciertas horas (happy hour)? Las que tengan fecha de fin se ocultan solas.
17. **Opciones de los bocadillos**: ¿tipo de pan, tamaños, frío o caliente?
18. **Bocadillos del fin de semana.** La rotación va de lunes a viernes. El
    sábado y el domingo la vista enseña un mensaje remitiendo a la carta.
    ¿Es correcto?
19. **¿Hay postres en el menú del día?** Ahora dice «postre o café incluidos»
    sin listarlos. Si se listan, hay un campo `postres` preparado.

21. **Repasar el catalán.** Las traducciones al catalán las he escrito yo, no
    venían de la web actual. Conviene que las lea alguien catalanoparlante del
    local, sobre todo los nombres de platos donde el uso de la casa manda más
    que el diccionario. Mientras tanto la web lo avisa arriba cuando está en
    catalán. Para quitar el aviso: `revisarCatalan: false` en `js/datos.js`.

## Comprobación que conviene hacer en el propio bar

20. Abrir la web con el móvil, en el local, con la wifi del bar, para confirmar
    que carga rápido y que se lee bien con la luz que hay.
