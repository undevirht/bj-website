/* ============================================================================
   BJ · app.js — la lógica de la web
   ----------------------------------------------------------------------------
   NO HACE FALTA TOCAR ESTE ARCHIVO para el día a día.
   Todo lo que cambia (menú, bocadillos, ofertas, carta, horarios, avisos)
   está en js/datos.js

   Contenido:
     1. Textos de interfaz (ES / CA / EN)
     2. Utilidades
     3. Reloj de Barcelona (Europe/Madrid) y cálculo de abierto/cerrado
     4. Pintado de cada vista
     5. Navegación por pestañas (con ancla en la URL)
     6. Carta: acordeones de categoría y filtro de alérgenos
     7. Idioma, tema y animaciones
   ========================================================================== */
(function () {
  "use strict";

  /* ======================================================================
     1. TEXTOS DE INTERFAZ
     ====================================================================== */
  var T = {
    es: {
      saltar: "Saltar al contenido",
      "nav-menu": "Menú", "nav-bocadillos": "Bocadillos",
      "nav-ofertas": "Ofertas", "nav-carta": "Carta",
      "titulo-menu": "Menú del día", "titulo-bocadillos": "Bocadillos del día",
      "titulo-ofertas": "Menús y ofertas", "titulo-carta": "La carta",
      "titulo-horarios": "Horarios",
      "sub-ofertas": "Combinados, desayunos y ofertas de la casa.",
      "sub-carta": "Toca una categoría para ver los platos.",
      "sub-horarios": "Hora de Barcelona (Europe/Madrid).",
      "pie-donde": "Dónde estamos", "pie-casa": "La casa",
      "pie-horario": "Horario", "ver-horarios": "Ver todos los horarios y avisos",
      primeros: "Primeros", segundos: "Segundos", postres: "Postres",
      incluye: "Incluye", hoy: "Hoy", abierto: "Abierto ahora",
      cerrado: "Cerrado", cierraA: "cierra a las", abreHoy: "abre hoy a las",
      abreManana: "abre mañana a las", abreEl: "abre el", alasLas: "a las",
      sinHorario: "consulta el horario",
      menuDe: "Menú del", menuHoy: "Hoy,",
      menuViejoAviso: "Este es el último menú publicado. Pregunta al personal por el de hoy.",
      sinMenuTitulo: "Hoy no hay menú del día",
      sinMenuTexto: "El menú del día no se sirve hoy. Puedes ver los bocadillos, las ofertas y la carta completa.",
      sinMenuBoton: "Ver la carta",
      sinBocadillos: "Hoy no hay bocadillo del día. Mira la carta: hay bocadillos fríos y calientes todo el día.",
      sinOfertas: "Ahora mismo no hay ofertas activas.",
      sinCarta: "La carta no está disponible en este momento. Pregunta al personal.",
      verCarta: "Ver la carta", verBocadillos: "Ver los bocadillos",
      sinResultados: "No queda ningún plato con ese filtro de alérgenos.",
      platos: "platos", plato: "plato",
      horarioBar: "Horario del bar", horarioCocina: "Horario de cocina",
      cerradoDia: "Cerrado", avisosTitulo: "Avisos",
      sinAvisos: "Ahora mismo no hay avisos.",
      comoLlegar: "Cómo llegar", llamar: "Llamar", escribir: "Escribir",
      whatsapp: "WhatsApp", reservas: "Reservas",
      alergenosTitulo: "Alérgenos", alergenosLeyenda: "Leyenda de alérgenos (UE)",
      alergenosFiltro: "Ocultar platos con:",
      alergenosPendiente: "[PENDIENTE: la carta todavía no indica los alérgenos plato por plato. Mientras tanto, consulta al personal.]",
      legalesPendiente: "[PENDIENTE: textos legales (aviso legal, privacidad, hojas de reclamación).]",
      fotosPendiente: "[PENDIENTE: fotos reales del local.]",
      reservasPendiente: "[PENDIENTE: confirmar si se aceptan reservas.]",
      contactoPendiente: "[PENDIENTE: teléfono, email y redes sociales del local.]",
      servicioPendiente: "[PENDIENTE: confirmar días y horario del menú del día.]",
      cocinaPendiente: "[PENDIENTE: ¿la cocina tiene un horario distinto del bar?]",
      errorTitulo: "No podemos mostrar la carta ahora mismo",
      errorTexto: "Pregunta al personal por el menú de hoy.",
      temaOscuro: "Cambiar a tema oscuro", temaClaro: "Cambiar a tema claro",
      idiomaLabel: "Idioma",
      catalaPendiente: "[PENDIENTE: la traducción al catalán todavía no está revisada.]",
      dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
      diasCorto: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
    },

    /* --------------------------------------------------------------------
       CATALÁN. La web actual no lo tenía: estos textos son nuevos y están
       pendientes de que los repase alguien catalanoparlante del local.
       Mientras DATOS.revisarCatalan valga true, la web lo avisa arriba.
       -------------------------------------------------------------------- */
    ca: {
      saltar: "Salta al contingut",
      "nav-menu": "Menú", "nav-bocadillos": "Entrepans",
      "nav-ofertas": "Ofertes", "nav-carta": "Carta",
      "titulo-menu": "Menú del dia", "titulo-bocadillos": "Entrepans del dia",
      "titulo-ofertas": "Menús i ofertes", "titulo-carta": "La carta",
      "titulo-horarios": "Horaris",
      "sub-ofertas": "Combinats, esmorzars i ofertes de la casa.",
      "sub-carta": "Toca una categoria per veure els plats.",
      "sub-horarios": "Hora de Barcelona (Europe/Madrid).",
      "pie-donde": "On som", "pie-casa": "La casa",
      "pie-horario": "Horari", "ver-horarios": "Veure tots els horaris i avisos",
      primeros: "Primers", segundos: "Segons", postres: "Postres",
      incluye: "Inclou", hoy: "Avui", abierto: "Obert ara",
      cerrado: "Tancat", cierraA: "tanca a les", abreHoy: "obre avui a les",
      abreManana: "obre demà a les", abreEl: "obre el", alasLas: "a les",
      sinHorario: "consulta l'horari",
      menuDe: "Menú del", menuHoy: "Avui,",
      menuViejoAviso: "Aquest és l'últim menú publicat. Pregunta al personal pel d'avui.",
      sinMenuTitulo: "Avui no hi ha menú del dia",
      sinMenuTexto: "El menú del dia no se serveix avui. Pots veure els entrepans, les ofertes i la carta sencera.",
      sinMenuBoton: "Veure la carta",
      sinBocadillos: "Avui no hi ha entrepà del dia. Mira la carta: hi ha entrepans freds i calents tot el dia.",
      sinOfertas: "Ara mateix no hi ha ofertes actives.",
      sinCarta: "La carta no està disponible en aquest moment. Pregunta al personal.",
      verCarta: "Veure la carta", verBocadillos: "Veure els entrepans",
      sinResultados: "No queda cap plat amb aquest filtre d'al·lèrgens.",
      platos: "plats", plato: "plat",
      horarioBar: "Horari del bar", horarioCocina: "Horari de cuina",
      cerradoDia: "Tancat", avisosTitulo: "Avisos",
      sinAvisos: "Ara mateix no hi ha avisos.",
      comoLlegar: "Com arribar", llamar: "Trucar", escribir: "Escriure",
      whatsapp: "WhatsApp", reservas: "Reserves",
      alergenosTitulo: "Al·lèrgens", alergenosLeyenda: "Llegenda d'al·lèrgens (UE)",
      alergenosFiltro: "Amagar plats amb:",
      alergenosPendiente: "[PENDENT: la carta encara no indica els al·lèrgens plat per plat. Mentrestant, consulta el personal.]",
      legalesPendiente: "[PENDENT: textos legals (avís legal, privacitat, fulls de reclamació).]",
      fotosPendiente: "[PENDENT: fotos reals del local.]",
      reservasPendiente: "[PENDENT: confirmar si s'accepten reserves.]",
      contactoPendiente: "[PENDENT: telèfon, correu i xarxes socials del local.]",
      servicioPendiente: "[PENDENT: confirmar els dies i l'horari del menú del dia.]",
      cocinaPendiente: "[PENDENT: la cuina té un horari diferent del bar?]",
      errorTitulo: "Ara mateix no podem mostrar la carta",
      errorTexto: "Pregunta al personal pel menú d'avui.",
      temaOscuro: "Canviar a tema fosc", temaClaro: "Canviar a tema clar",
      idiomaLabel: "Idioma",
      catalaPendiente: "[PENDENT: la traducció al català encara no està revisada. Si hi trobes cap error, digues-ho al personal.]",
      dias: ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"],
      diasCorto: ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]
    },

    en: {
      saltar: "Skip to content",
      "nav-menu": "Menu", "nav-bocadillos": "Sandwiches",
      "nav-ofertas": "Deals", "nav-carta": "Full menu",
      "titulo-menu": "Menu of the day", "titulo-bocadillos": "Sandwiches of the day",
      "titulo-ofertas": "Deals & set menus", "titulo-carta": "Our menu",
      "titulo-horarios": "Opening hours",
      "sub-ofertas": "Combos, breakfasts and house deals.",
      "sub-carta": "Tap a category to see the dishes.",
      "sub-horarios": "Barcelona time (Europe/Madrid).",
      "pie-donde": "Find us", "pie-casa": "About us",
      "pie-horario": "Hours", "ver-horarios": "See all hours and notices",
      primeros: "Starters", segundos: "Mains", postres: "Desserts",
      incluye: "Includes", hoy: "Today", abierto: "Open now",
      cerrado: "Closed", cierraA: "closes at", abreHoy: "opens today at",
      abreManana: "opens tomorrow at", abreEl: "opens", alasLas: "at",
      sinHorario: "check the opening hours",
      menuDe: "Menu for", menuHoy: "Today,",
      menuViejoAviso: "This is the latest published menu. Ask our staff about today's.",
      sinMenuTitulo: "No menu of the day today",
      sinMenuTexto: "The set lunch menu is not served today. You can still see the sandwiches, the deals and the full menu.",
      sinMenuBoton: "See the menu",
      sinBocadillos: "No sandwich of the day today. Check the menu: hot and cold sandwiches all day.",
      sinOfertas: "There are no active deals right now.",
      sinCarta: "The menu is not available right now. Please ask our staff.",
      verCarta: "See the menu", verBocadillos: "See the sandwiches",
      sinResultados: "No dish is left with that allergen filter.",
      platos: "items", plato: "item",
      horarioBar: "Bar hours", horarioCocina: "Kitchen hours",
      cerradoDia: "Closed", avisosTitulo: "Notices",
      sinAvisos: "No notices right now.",
      comoLlegar: "Directions", llamar: "Call", escribir: "Email",
      whatsapp: "WhatsApp", reservas: "Bookings",
      alergenosTitulo: "Allergens", alergenosLeyenda: "Allergen key (EU)",
      alergenosFiltro: "Hide dishes containing:",
      alergenosPendiente: "[PENDING: per-dish allergen information is not published yet. Please ask our staff.]",
      legalesPendiente: "[PENDING: legal notice, privacy policy, complaint forms.]",
      fotosPendiente: "[PENDING: real photos of the bar.]",
      reservasPendiente: "[PENDING: confirm whether bookings are accepted.]",
      contactoPendiente: "[PENDING: phone, email and social media.]",
      servicioPendiente: "[PENDING: confirm the days and times of the set lunch menu.]",
      cocinaPendiente: "[PENDING: does the kitchen have different hours from the bar?]",
      errorTitulo: "We cannot show the menu right now",
      errorTexto: "Please ask our staff about today's menu.",
      temaOscuro: "Switch to dark theme", temaClaro: "Switch to light theme",
      idiomaLabel: "Language",
      catalaPendiente: "[PENDING: the Catalan translation has not been reviewed yet.]",
      dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      diasCorto: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }
  };

  /* Los 14 alérgenos de declaración obligatoria en la UE */
  var ALERGENOS = {
    "gluten":        { ico: "🌾", es: "Gluten",            en: "Cereals with gluten", ca: "Gluten" },
    "crustaceos":    { ico: "🦐", es: "Crustáceos",        en: "Crustaceans",         ca: "Crustacis" },
    "huevos":        { ico: "🥚", es: "Huevos",            en: "Eggs",                ca: "Ous" },
    "pescado":       { ico: "🐟", es: "Pescado",           en: "Fish",                ca: "Peix" },
    "cacahuetes":    { ico: "🥜", es: "Cacahuetes",        en: "Peanuts",             ca: "Cacauets" },
    "soja":          { ico: "🌱", es: "Soja",              en: "Soybeans",            ca: "Soja" },
    "lacteos":       { ico: "🥛", es: "Lácteos",           en: "Milk",                ca: "Lactis" },
    "frutos-cascara":{ ico: "🌰", es: "Frutos de cáscara", en: "Nuts",                ca: "Fruits de closca" },
    "apio":          { ico: "🥬", es: "Apio",              en: "Celery",              ca: "Api" },
    "mostaza":       { ico: "🌭", es: "Mostaza",           en: "Mustard",             ca: "Mostassa" },
    "sesamo":        { ico: "🫓", es: "Sésamo",            en: "Sesame",              ca: "Sèsam" },
    "sulfitos":      { ico: "🍷", es: "Sulfitos",          en: "Sulphites",           ca: "Sulfits" },
    "altramuces":    { ico: "🫘", es: "Altramuces",        en: "Lupin",               ca: "Tramussos" },
    "moluscos":      { ico: "🐙", es: "Moluscos",          en: "Molluscs",            ca: "Mol·luscs" }
  };

  var ETIQUETAS = {
    "vegetariano": { es: "Vegetariano", en: "Vegetarian", ca: "Vegetarià" },
    "picante":     { es: "Picante",     en: "Spicy",      ca: "Picant" },
    "novedad":     { es: "Novedad",     en: "New",        ca: "Novetat" },
    "agotado":     { es: "Agotado",     en: "Sold out",   ca: "Exhaurit" }
  };

  /* ======================================================================
     2. UTILIDADES
     ====================================================================== */
  var idioma = "es";
  var D = null;                 // los datos, una vez validados
  var alergenosOcultos = [];    // filtro activo
  var posiciones = {};          // posición de lectura de cada vista

  function t(clave) { return (T[idioma] && T[idioma][clave]) || T.es[clave] || ""; }

  /* Devuelve el texto en el idioma activo. Acepta cadena u objeto {es,en}. */
  function tx(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[idioma] || v.es || v.en || "";
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function pon(id, html) { var e = document.getElementById(id); if (e) e.innerHTML = html; }

  /* ======================================================================
     3. RELOJ DE BARCELONA Y CÁLCULO DE ABIERTO / CERRADO
     ----------------------------------------------------------------------
     El cálculo usa SIEMPRE la zona horaria Europe/Madrid, nunca la del
     móvil del cliente (que puede ser la de otro país).
     ====================================================================== */
  function ahoraMadrid() {
    var p = {};
    try {
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "Europe/Madrid",
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", hourCycle: "h23"
      }).formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
    } catch (e) {
      // Navegador muy antiguo sin zonas horarias: usamos la hora del aparato.
      var n = new Date();
      p.year = String(n.getFullYear());
      p.month = ("0" + (n.getMonth() + 1)).slice(-2);
      p.day = ("0" + n.getDate()).slice(-2);
      p.hour = ("0" + n.getHours()).slice(-2);
      p.minute = ("0" + n.getMinutes()).slice(-2);
    }
    var y = +p.year, mo = +p.month, da = +p.day;
    var dowJS = new Date(Date.UTC(y, mo - 1, da)).getUTCDay();   // 0 = domingo
    return {
      iso: p.year + "-" + p.month + "-" + p.day,
      dia: (dowJS + 6) % 7,                                      // 0 = lunes
      min: (+p.hour) * 60 + (+p.minute)
    };
  }

  function aMin(hhmm) {
    var m = /^(\d{1,2}):(\d{2})$/.exec(String(hhmm).trim());
    return m ? (+m[1]) * 60 + (+m[2]) : null;
  }

  function aHora(min) {
    min = ((min % 1440) + 1440) % 1440;
    return Math.floor(min / 60) + ":" + ("0" + (min % 60)).slice(-2);
  }

  function tramoTexto(tr) { return tr[0] + " – " + tr[1]; }

  /* Convierte la tabla de 7 días en intervalos absolutos de la semana.
     Un tramo cuyo cierre es menor o igual que la apertura pasa de medianoche. */
  function intervalos(tabla) {
    var out = [];
    for (var d = 0; d < 7; d++) {
      var dia = (tabla && tabla[d]) || [];
      for (var i = 0; i < dia.length; i++) {
        var a = aMin(dia[i][0]), b = aMin(dia[i][1]);
        if (a === null || b === null) continue;
        var ini = d * 1440 + a, fin = d * 1440 + b;
        if (fin <= ini) fin += 1440;               // cruza la medianoche
        out.push([ini, fin]);
      }
    }
    return out;
  }

  /* Devuelve { abierto, cierraMin, abreMin, diasHasta } */
  function estadoApertura(tabla) {
    var ahora = ahoraMadrid();
    var base = intervalos(tabla);
    var ahoraAbs = ahora.dia * 1440 + ahora.min;
    var SEMANA = 7 * 1440;
    var abierto = null, proxima = null;
    var off = [-SEMANA, 0, SEMANA];

    for (var o = 0; o < off.length; o++) {
      for (var i = 0; i < base.length; i++) {
        var ini = base[i][0] + off[o], fin = base[i][1] + off[o];
        if (ahoraAbs >= ini && ahoraAbs < fin) abierto = fin;
        if (ini > ahoraAbs && (proxima === null || ini < proxima)) proxima = ini;
      }
    }

    var r = { ahora: ahora, abierto: abierto !== null };
    if (abierto !== null) {
      r.cierraMin = abierto;
    } else if (proxima !== null) {
      r.abreMin = proxima;
      r.diasHasta = Math.floor(proxima / 1440) - Math.floor(ahoraAbs / 1440);
      r.diaSemana = ((Math.floor(proxima / 1440) % 7) + 7) % 7;
    }
    return r;
  }

  function textoEstado(e) {
    if (e.abierto) return t("abierto") + " · " + t("cierraA") + " " + aHora(e.cierraMin);
    if (e.abreMin === undefined) return t("cerrado") + " · " + t("sinHorario");
    var h = aHora(e.abreMin);
    if (e.diasHasta === 0) return t("cerrado") + " · " + t("abreHoy") + " " + h;
    if (e.diasHasta === 1) return t("cerrado") + " · " + t("abreManana") + " " + h;
    return t("cerrado") + " · " + t("abreEl") + " " + t("diasCorto")[e.diaSemana] + " " + t("alasLas") + " " + h;
  }

  function pintarEstado() {
    var el = document.getElementById("estado");
    var txtEl = document.getElementById("estado-texto");
    if (!el || !txtEl || !D || !D.horarios) return;
    var e = estadoApertura(D.horarios.bar);
    el.setAttribute("data-abierto", e.abierto ? "si" : "no");
    txtEl.textContent = textoEstado(e);
  }

  /* ======================================================================
     4. PINTADO DE LAS VISTAS
     ====================================================================== */

  /* --- piezas reutilizables --- */
  function pintarEtiquetas(etiq) {
    if (!etiq || !etiq.length) return "";
    return '<span class="etiquetas">' + etiq.map(function (e) {
      var d = ETIQUETAS[e];
      return '<span class="etiq" data-e="' + esc(e) + '">' + esc(d ? tx(d) : e) + "</span>";
    }).join("") + "</span>";
  }

  function pintarAlergenos(al) {
    if (!al || !al.length) return "";
    return '<span class="alergenos">' + al.map(function (a) {
      var d = ALERGENOS[a];
      if (!d) return "";
      return '<span class="alergeno"><span aria-hidden="true">' + d.ico + "</span>" + esc(tx(d)) + "</span>";
    }).join("") + "</span>";
  }

  /* Una línea de plato: nombre a la izquierda, precio siempre a la derecha */
  function pintarPlato(item, opciones) {
    opciones = opciones || {};
    var agotado = item.etiq && item.etiq.indexOf("agotado") !== -1;
    return '<div class="plato' + (opciones.revelar ? " revelar" : "") + '"' +
      (agotado ? ' data-agotado="si"' : "") +
      ' data-al="' + esc((item.al || []).join(" ")) + '">' +
      '<span class="plato-nombre">' + esc(tx(item)) +
      (item.detalle ? '<span class="plato-detalle">' + esc(tx(item.detalle)) + "</span>" : "") +
      pintarAlergenos(item.al) + pintarEtiquetas(item.etiq) +
      "</span>" +
      (item.price ? '<span class="plato-precio">' + esc(item.price) + "</span>" : "") +
      "</div>";
  }

  function bloqueVacio(titulo, texto, botonHref, botonTexto) {
    return '<div class="vacio revelar">' +
      '<span class="icono" aria-hidden="true">🍽️</span>' +
      (titulo ? "<h2>" + esc(titulo) + "</h2>" : "") +
      "<p>" + esc(texto) + "</p>" +
      (botonHref ? '<a class="pie-boton pulsable" href="' + botonHref + '">' + esc(botonTexto) + "</a>" : "") +
      "</div>";
  }

  function pendiente(texto) {
    return '<p class="pendiente">' + esc(texto) + "</p>";
  }

  /* --- fecha larga --- */
  function fechaLarga(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
    if (!m) return "";
    var f = new Date(+m[1], +m[2] - 1, +m[3]);
    var LOCALES = { es: "es-ES", ca: "ca-ES", en: "en-GB" };
    try {
      return new Intl.DateTimeFormat(LOCALES[idioma] || "es-ES",
        { weekday: "long", day: "numeric", month: "long" }).format(f);
    } catch (e) { return iso; }
  }

  /* --- 4.1 MENÚ DEL DÍA --- */
  function pintarMenuDelDia() {
    var m = D.menuDelDia || {};
    var ahora = ahoraMadrid();
    var sub = document.getElementById("menu-subtitulo");

    var servicio = m.servicio || {};
    var diasServicio = servicio.dias;
    var seSirveHoy = !diasServicio || diasServicio.indexOf(ahora.dia) !== -1;
    var hayPlatos = (m.primeros && m.primeros.length) || (m.segundos && m.segundos.length);

    if (!hayPlatos || !seSirveHoy) {
      if (sub) sub.textContent = "";
      pon("contenido-menu",
        bloqueVacio(t("sinMenuTitulo"), t("sinMenuTexto"), "#carta", t("sinMenuBoton")) +
        (hayPlatos && m.fecha ? '<p class="menu-fecha" style="margin-top:1rem">' +
          esc(t("menuDe") + " " + fechaLarga(m.fecha) + " · " + (m.price || "")) + "</p>" : ""));
      return;
    }

    /* Si la fecha del menú no es la de hoy, se enseña la fecha real, nunca "hoy". */
    var esDeHoy = m.fecha === ahora.iso;
    var etiquetaFecha = esDeHoy
      ? t("menuHoy") + " " + fechaLarga(m.fecha)
      : t("menuDe") + " " + fechaLarga(m.fecha);
    if (sub) sub.textContent = etiquetaFecha;

    var html = "";

    if (!esDeHoy) {
      html += '<div class="aviso revelar" data-tipo="aviso"><span aria-hidden="true">📅</span><span>' +
        esc(t("menuViejoAviso")) + "</span></div>";
    }

    html += '<div class="tarjeta revelar">' +
      '<div class="menu-cabecera">' +
        '<div><span class="menu-fecha">' + esc(etiquetaFecha) + "</span></div>" +
        '<div class="precio-destacado">' + esc(m.price || "") + "</div>" +
      "</div>";

    if (m.incluye && tx(m.incluye)) {
      html += '<p class="menu-incluye">' + esc(t("incluye") + ": " + tx(m.incluye)) + "</p>";
    }

    /* Días y horas en que se sirve */
    if (servicio.horario) {
      html += '<p class="menu-incluye">' + esc(nombresDias(diasServicio) + " · " + servicio.horario) + "</p>";
    } else {
      html += '<p class="menu-incluye">' + esc(nombresDias(diasServicio)) + "</p>" +
              pendiente(t("servicioPendiente"));
    }
    html += "</div>";

    /* Primeros y segundos: una columna en móvil, dos cuando cabe */
    html += '<div class="rejilla-2" style="margin-top:var(--e-4)">';
    html += grupoPlatos(t("primeros"), m.primeros);
    html += grupoPlatos(t("segundos"), m.segundos);
    html += "</div>";
    if (m.postres && m.postres.length) {
      html += '<div style="margin-top:var(--e-4)">' + grupoPlatos(t("postres"), m.postres) + "</div>";
    }

    pon("contenido-menu", html);
  }

  function grupoPlatos(titulo, lista) {
    if (!lista || !lista.length) return "";
    return '<section class="bloque revelar">' +
      '<h2 class="bloque-titulo">' + esc(titulo) + "</h2>" +
      lista.map(function (p) { return pintarPlato(p); }).join("") +
      "</section>";
  }

  function nombresDias(dias) {
    if (!dias || !dias.length) return "";
    var n = t("dias");
    /* rango continuo → "Lunes a viernes" */
    var ord = dias.slice().sort(function (a, b) { return a - b; });
    var continuo = ord.every(function (v, i) { return i === 0 || v === ord[i - 1] + 1; });
    if (continuo && ord.length > 2) {
      var ultimo = n[ord[ord.length - 1]];
      /* "Lunes a viernes" · "Dilluns a divendres" · "Monday to Friday" */
      if (idioma === "en") return n[ord[0]] + " to " + ultimo;
      return n[ord[0]] + " a " + ultimo.toLowerCase();
    }
    return ord.map(function (d) { return n[d]; }).join(", ");
  }

  /* --- 4.2 BOCADILLOS DEL DÍA --- */
  function pintarBocadillos() {
    var b = D.bocadillos || {};
    var ahora = ahoraMadrid();
    var sub = document.getElementById("bocadillos-subtitulo");

    if (!b.dias || !b.dias.length) {
      if (sub) sub.textContent = "";
      pon("contenido-bocadillos", bloqueVacio("", t("sinBocadillos"), "#carta", t("verCarta")));
      return;
    }

    if (sub) sub.textContent = tx(b.titulo) + (b.price ? " · " + b.price : "");

    var html = '<div class="tarjeta revelar">';
    if (b.price) {
      html += '<div class="menu-cabecera"><div><span class="menu-fecha">' +
        esc(tx(b.titulo)) + '</span></div><div class="precio-destacado">' + esc(b.price) + "</div></div>";
    }
    if (b.opciones && tx(b.opciones)) {
      html += '<p class="menu-incluye">' + esc(tx(b.opciones)) + "</p>";
    }

    html += "<div>";
    b.dias.forEach(function (x, i) {
      /* El bocadillo de hoy sale resaltado. El índice 0 es el lunes. */
      var esHoy = i === ahora.dia;
      html += '<div class="dia-boca"' + (esHoy ? ' data-hoy="si"' : "") + ">" +
        '<span class="nombre-dia">' + esc(tx(x.dia)) +
        (esHoy ? '<span class="etiqueta-hoy">' + esc(t("hoy")) + "</span>" : "") +
        "</span>" +
        pintarPlato({ es: x.es, en: x.en, price: x.price || "", al: x.al, etiq: x.etiq, detalle: x.opciones }) +
        "</div>";
    });
    html += "</div></div>";

    if (!hayAlergenosEnLaWeb()) html += pendiente(t("alergenosPendiente"));

    pon("contenido-bocadillos", html);
  }

  /* --- 4.3 MENÚS Y OFERTAS --- */
  /* Una oferta con la fecha "hasta" ya pasada desaparece sola. */
  function ofertaVigente(o) {
    var v = o.vigencia;
    if (!v) return true;
    var ahora = ahoraMadrid();
    if (v.desde && ahora.iso < v.desde) return false;
    if (v.hasta && ahora.iso > v.hasta) return false;
    return true;
  }

  function textoVigencia(v) {
    if (!v) return "";
    var partes = [];
    if (v.dias && v.dias.length) partes.push(nombresDias(v.dias));
    if (v.horas) partes.push(v.horas);
    if (v.desde || v.hasta) {
      partes.push((v.desde ? fechaLarga(v.desde) : "") +
        (v.desde && v.hasta ? " – " : "") + (v.hasta ? fechaLarga(v.hasta) : ""));
    }
    return partes.join(" · ");
  }

  function pintarOfertas() {
    var grupos = (D.ofertas || []).map(function (g) {
      return { grupo: g.grupo, nota: g.nota, items: (g.items || []).filter(ofertaVigente) };
    }).filter(function (g) { return g.items.length; });

    if (!grupos.length) {
      pon("contenido-ofertas", bloqueVacio("", t("sinOfertas"), "#carta", t("verCarta")));
      return;
    }

    var html = '<div class="rejilla-2">';
    grupos.forEach(function (g) {
      html += '<section class="tarjeta revelar">' +
        '<h2 class="bloque-titulo">' + esc(tx(g.grupo)) + "</h2>" +
        (g.nota ? '<p class="categoria-nota">' + esc(tx(g.nota)) + "</p>" : "");
      g.items.forEach(function (o) {
        html += pintarPlato({
          es: o.es, en: o.en, price: o.price, al: o.al, etiq: o.etiq,
          detalle: juntarDetalle(o)
        });
      });
      html += "</section>";
    });
    html += "</div>";
    pon("contenido-ofertas", html);
  }

  function juntarDetalle(o) {
    var partes = [];
    if (o.condiciones && tx(o.condiciones)) partes.push(tx(o.condiciones));
    var v = textoVigencia(o.vigencia);
    if (v) partes.push(v);
    return partes.length ? partes.join(" · ") : null;
  }

  /* --- 4.4 CARTA --- */
  function hayAlergenosEnLaWeb() {
    if (!D || !D.carta) return false;
    return D.carta.some(function (c) {
      return (c.items || []).some(function (i) { return i.al && i.al.length; });
    });
  }

  function pintarCarta() {
    if (!D.carta || !D.carta.length) {
      pon("contenido-carta", bloqueVacio("", t("sinCarta")));
      return;
    }

    /* Categorías: acordeones CERRADOS por defecto. El cliente abre la que
       le interesa y no se come una página larguísima de scroll. */
    var html = D.carta.map(function (c, i) {
      var n = (c.items || []).length;
      return '<section class="categoria" id="cat-' + i + '">' +
        '<h2 style="margin:0">' +
          '<button type="button" class="categoria-cabecera" aria-expanded="false" aria-controls="cuerpo-' + i + '">' +
            "<span>" + esc(tx(c.categoria)) + "</span>" +
            '<span class="cuenta">' + n + " " + (n === 1 ? t("plato") : t("platos")) + "</span>" +
            '<span class="flecha" aria-hidden="true">▾</span>' +
          "</button>" +
        "</h2>" +
        '<div class="categoria-cuerpo" id="cuerpo-' + i + '" hidden>' +
          (c.nota ? '<p class="categoria-nota">' + esc(tx(c.nota)) + "</p>" : "") +
          (c.items || []).map(function (it) { return pintarPlato(it); }).join("") +
        "</div>" +
      "</section>";
    }).join("");
    html += '<p class="sin-resultados oculto" id="sin-resultados">' + esc(t("sinResultados")) + "</p>";
    pon("contenido-carta", html);

    pintarAlergenosCarta();
  }

  /* Leyenda de los 14 alérgenos UE + filtro. Solo si la carta los indica. */
  function pintarAlergenosCarta() {
    var hay = hayAlergenosEnLaWeb();

    if (!hay) {
      pon("filtro-alergenos", pendiente(t("alergenosPendiente")));
      pon("leyenda-alergenos",
        '<p class="categoria-nota" style="margin-top:var(--e-4)">' +
        esc(tx(D.local && D.local.avisoAlergias)) + "</p>");
      return;
    }

    /* Filtro por alérgeno */
    var usados = Object.keys(ALERGENOS).filter(function (a) {
      return D.carta.some(function (c) {
        return (c.items || []).some(function (i) { return (i.al || []).indexOf(a) !== -1; });
      });
    });

    pon("filtro-alergenos",
      '<fieldset style="border:0;margin:var(--e-3) 0">' +
        '<legend class="categoria-nota">' + esc(t("alergenosFiltro")) + "</legend>" +
        '<div class="chips" style="padding:0">' +
        usados.map(function (a) {
          return '<button type="button" class="chip" data-alergeno="' + esc(a) + '" aria-pressed="false">' +
            '<span aria-hidden="true">' + ALERGENOS[a].ico + "</span>&nbsp;" + esc(tx(ALERGENOS[a])) + "</button>";
        }).join("") +
        "</div></fieldset>");

    pon("leyenda-alergenos",
      '<details class="categoria" style="margin-top:var(--e-5)">' +
        '<summary class="categoria-cabecera">' + esc(t("alergenosLeyenda")) + "</summary>" +
        '<div class="leyenda-alergenos">' +
        Object.keys(ALERGENOS).map(function (a) {
          return '<span class="alergeno"><span aria-hidden="true">' + ALERGENOS[a].ico + "</span>" +
            esc(tx(ALERGENOS[a])) + "</span>";
        }).join("") +
        "</div></details>" +
        '<p class="categoria-nota">' + esc(tx(D.local && D.local.avisoAlergias)) + "</p>");
  }

  /* --- 4.5 HORARIOS --- */
  function tablaHorario(tabla, titulo) {
    var ahora = ahoraMadrid();
    var filas = "";
    for (var d = 0; d < 7; d++) {
      var tramos = (tabla && tabla[d]) || [];
      var textoT = tramos.length
        ? tramos.map(tramoTexto).join(" · ")
        : t("cerradoDia");
      filas += "<tr" + (d === ahora.dia ? ' data-hoy="si"' : "") + ">" +
        "<td>" + esc(t("dias")[d]) +
        (d === ahora.dia ? '<span class="etiqueta-hoy">' + esc(t("hoy")) + "</span>" : "") +
        "</td><td>" + esc(textoT) + "</td></tr>";
    }
    return '<table class="tabla-horario"><caption>' + esc(titulo) + "</caption><tbody>" + filas + "</tbody></table>";
  }

  function pintarHorarios() {
    var h = D.horarios || {};
    var e = estadoApertura(h.bar);
    var html = '<div class="tarjeta revelar">' +
      '<p class="estado" data-abierto="' + (e.abierto ? "si" : "no") + '" style="margin-bottom:var(--e-3)">' +
        '<span class="punto" aria-hidden="true"></span>' + esc(textoEstado(e)) + "</p>" +
      tablaHorario(h.bar, t("horarioBar")) +
      "</div>";

    if (h.cocina) {
      html += '<div class="tarjeta revelar">' + tablaHorario(h.cocina, t("horarioCocina")) + "</div>";
    } else {
      html += pendiente(t("cocinaPendiente"));
    }

    /* Espacio para avisos: festivos, vacaciones, cierres puntuales */
    html += '<section class="bloque revelar" style="margin-top:var(--e-5)">' +
      '<h2 class="bloque-titulo">' + esc(t("avisosTitulo")) + "</h2>" +
      (avisosVigentes().length
        ? avisosVigentes().map(pintarAviso).join("")
        : '<p class="categoria-nota">' + esc(t("sinAvisos")) + "</p>") +
      "</section>";

    pon("contenido-horarios", html);
  }

  function avisosVigentes() {
    var ahora = ahoraMadrid();
    return (D.avisos || []).filter(function (a) {
      if (a.desde && ahora.iso < a.desde) return false;
      if (a.hasta && ahora.iso > a.hasta) return false;
      return true;
    });
  }

  function pintarAviso(a) {
    var ico = a.tipo === "cierre" ? "🚫" : (a.tipo === "aviso" ? "⚠️" : "ℹ️");
    return '<div class="aviso" data-tipo="' + esc(a.tipo || "info") + '">' +
      '<span aria-hidden="true">' + ico + "</span><span>" + esc(tx(a)) + "</span></div>";
  }

  function pintarAvisosGlobales() {
    var html = avisosVigentes().map(pintarAviso).join("");

    /* Mientras el catalán no esté revisado, se avisa al verlo en catalán.
       Para quitarlo: pon revisarCatalan: false en datos.js */
    if (idioma === "ca" && D.revisarCatalan) {
      html = '<div class="aviso" data-tipo="aviso"><span aria-hidden="true">⚠️</span><span>' +
        esc(t("catalaPendiente")) + "</span></div>" + html;
    }

    var caja = document.getElementById("avisos-globales");
    pon("avisos-globales", html);
    if (caja) caja.hidden = !html;
  }

  /* --- 4.6 PIE --- */
  function pintarPie() {
    var l = D.local || {};

    var lema = document.getElementById("pie-lema");
    if (lema) lema.textContent = tx(l.lema) + (tx(l.ubicacionCorta) ? " · " + tx(l.ubicacionCorta) : "");

    var hist = document.getElementById("pie-historia");
    if (hist) hist.textContent = tx(l.historia);

    /* Enlaces de contacto: solo salen los que existen en datos.js */
    var enlaces = [];
    if (l.maps) enlaces.push(boton(l.maps, "📍", t("comoLlegar"), true));
    if (l.telefono) enlaces.push(boton("tel:" + l.telefono.replace(/\s+/g, ""), "📞", t("llamar")));
    if (l.whatsapp) enlaces.push(boton("https://wa.me/" + l.whatsapp.replace(/\D/g, ""), "💬", t("whatsapp"), true));
    if (l.email) enlaces.push(boton("mailto:" + l.email, "✉️", t("escribir")));
    if (l.reservas) enlaces.push(boton(l.reservas, "📅", t("reservas"), true));
    var redes = l.redes || {};
    Object.keys(redes).forEach(function (r) {
      if (redes[r]) enlaces.push(boton(redes[r], "🔗", r.charAt(0).toUpperCase() + r.slice(1), true));
    });
    pon("pie-contacto", enlaces.join("") +
      (!l.telefono && !l.email && !redes.instagram ? pendiente(t("contactoPendiente")) : "") +
      (!l.reservas ? pendiente(t("reservasPendiente")) : ""));

    /* Fotos del local */
    var fotos = l.fotos || [];
    pon("pie-fotos", fotos.length
      ? fotos.map(function (f) {
          return '<img src="' + esc(f.src) + '" alt="' + esc(tx(f.alt)) + '" loading="lazy" decoding="async"' +
            (f.w ? ' width="' + esc(f.w) + '"' : "") + (f.h ? ' height="' + esc(f.h) + '"' : "") +
            ' style="border-radius:var(--radio-sm);margin-top:var(--e-2)">';
        }).join("")
      : pendiente(t("fotosPendiente")));

    /* Horario resumido de hoy */
    var ahora = ahoraMadrid();
    var tramos = (D.horarios && D.horarios.bar && D.horarios.bar[ahora.dia]) || [];
    pon("pie-horario",
      "<p><strong>" + esc(t("dias")[ahora.dia]) + ":</strong> " +
      esc(tramos.length ? tramos.map(tramoTexto).join(" · ") : t("cerradoDia")) + "</p>");

    var al = document.getElementById("pie-alergias");
    if (al) al.textContent = tx(l.avisoAlergias);

    var legales = l.legales || [];
    pon("pie-legales", legales.length
      ? legales.map(function (x) {
          return '<a href="' + esc(x.url || "#") + '">' + esc(tx(x.titulo)) + "</a>";
        }).join(" · ")
      : esc(t("legalesPendiente")));
  }

  function boton(href, ico, texto, externo) {
    return '<a class="pie-boton pulsable" href="' + esc(href) + '"' +
      (externo ? ' target="_blank" rel="noopener"' : "") + ">" +
      '<span aria-hidden="true">' + ico + "</span>" + esc(texto) + "</a>";
  }

  /* --- 4.7 Datos estructurados (schema.org) sincronizados con datos.js --- */
  var DIAS_SCHEMA = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  function sincronizarSchema() {
    var el = document.getElementById("datos-estructurados");
    if (!el || !D) return;
    try {
      var j = JSON.parse(el.textContent);
      var l = D.local || {};
      if (l.nombre) j.name = l.nombre;
      if (l.direccion) j.address.streetAddress = l.direccion;
      if (l.cp) j.address.postalCode = l.cp;
      if (l.ciudad) j.address.addressLocality = l.ciudad;
      if (l.telefono) j.telephone = l.telefono; else delete j.telephone;
      if (l.maps) j.hasMap = l.maps;
      j.openingHoursSpecification = [];
      for (var d = 0; d < 7; d++) {
        ((D.horarios && D.horarios.bar && D.horarios.bar[d]) || []).forEach(function (tr) {
          j.openingHoursSpecification.push({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: DIAS_SCHEMA[d], opens: tr[0], closes: tr[1]
          });
        });
      }
      el.textContent = JSON.stringify(j, null, 2);
    } catch (e) { /* si algo falla, se queda el bloque estático del HTML */ }
  }

  /* ======================================================================
     5. NAVEGACIÓN POR PESTAÑAS (con ancla en la URL)
     ----------------------------------------------------------------------
     Cada apartado tiene su ancla: #menu-del-dia, #bocadillos, #ofertas,
     #carta y #horarios. Así se pueden imprimir códigos QR por apartado.
     ====================================================================== */
  var VISTAS = [
    { id: "menu-del-dia", panel: "vista-menu-del-dia", tab: "tab-menu-del-dia" },
    { id: "bocadillos",   panel: "vista-bocadillos",   tab: "tab-bocadillos" },
    { id: "ofertas",      panel: "vista-ofertas",      tab: "tab-ofertas" },
    { id: "carta",        panel: "vista-carta",        tab: "tab-carta" },
    { id: "horarios",     panel: "vista-horarios",     tab: null }
  ];
  var VISTA_POR_DEFECTO = "menu-del-dia";
  var vistaActiva = null;

  function vistaPorId(id) {
    for (var i = 0; i < VISTAS.length; i++) if (VISTAS[i].id === id) return VISTAS[i];
    return null;
  }

  function mostrarVista(id, opciones) {
    opciones = opciones || {};
    var v = vistaPorId(id) || vistaPorId(VISTA_POR_DEFECTO);
    if (!v || v.id === vistaActiva) return;

    /* Guardamos dónde estaba leyendo el cliente en la vista que deja */
    if (vistaActiva) posiciones[vistaActiva] = window.scrollY;

    VISTAS.forEach(function (x) {
      var panel = document.getElementById(x.panel);
      if (panel) {
        panel.hidden = x.id !== v.id;
        panel.classList.remove("entrando");
      }
      if (x.tab) {
        var tab = document.getElementById(x.tab);
        if (tab) {
          var sel = x.id === v.id;
          tab.setAttribute("aria-selected", sel ? "true" : "false");
          tab.tabIndex = sel ? 0 : -1;
        }
      }
    });

    /* Si no hay ninguna pestaña para esta vista (horarios), la primera queda enfocable */
    if (!v.tab) {
      var primera = document.getElementById(VISTAS[0].tab);
      if (primera) primera.tabIndex = 0;
    }

    var panelActivo = document.getElementById(v.panel);
    if (panelActivo) {
      panelActivo.classList.add("entrando");
      observarRevelados(panelActivo);
    }

    vistaActiva = v.id;

    /* Volvemos a la posición de lectura guardada de esta vista */
    var y = opciones.restaurar === false ? 0 : (posiciones[v.id] || 0);
    window.scrollTo({ top: y, behavior: "auto" });
  }

  function idDesdeHash() {
    var h = (location.hash || "").replace(/^#/, "");
    return vistaPorId(h) ? h : VISTA_POR_DEFECTO;
  }

  function iniciarNavegacion() {
    window.addEventListener("hashchange", function () {
      /* Solo cambiamos de vista si el ancla es una de las nuestras. Así un
         ancla interna (por ejemplo la de "Saltar al contenido") no devuelve
         al cliente al menú del día. */
      var h = (location.hash || "").replace(/^#/, "");
      if (vistaPorId(h)) mostrarVista(h);
    });

    /* Teclado en la barra de pestañas: flechas, Inicio y Fin */
    var nav = document.getElementById("nav-principal");
    if (nav) {
      nav.addEventListener("keydown", function (ev) {
        var tabs = $$('[role="tab"]', nav);
        var i = tabs.indexOf(document.activeElement);
        if (i === -1) return;
        var j = null;
        if (ev.key === "ArrowRight" || ev.key === "ArrowDown") j = (i + 1) % tabs.length;
        else if (ev.key === "ArrowLeft" || ev.key === "ArrowUp") j = (i - 1 + tabs.length) % tabs.length;
        else if (ev.key === "Home") j = 0;
        else if (ev.key === "End") j = tabs.length - 1;
        if (j === null) return;
        ev.preventDefault();
        tabs[j].focus();
        tabs[j].click();
      });
    }

    mostrarVista(idDesdeHash(), { restaurar: false });
  }

  /* ======================================================================
     6. CARTA: CHIPS, BUSCADOR Y FILTRO DE ALÉRGENOS
     ====================================================================== */
  function iniciarCarta() {
    var carta = document.getElementById("contenido-carta");

    /* Abrir y cerrar categorías */
    if (carta) carta.addEventListener("click", function (ev) {
      var cab = ev.target.closest(".categoria-cabecera");
      if (!cab || !cab.hasAttribute("aria-controls")) return;
      var abierto = cab.getAttribute("aria-expanded") === "true";
      cab.setAttribute("aria-expanded", abierto ? "false" : "true");
      var cuerpo = document.getElementById(cab.getAttribute("aria-controls"));
      if (!cuerpo) return;
      cuerpo.hidden = abierto;
      if (!abierto) {
        /* Al abrir, los platos entran con una transición suave */
        cuerpo.classList.remove("abriendo");
        void cuerpo.offsetWidth;            // reinicia la animación
        cuerpo.classList.add("abriendo");
      }
    });

    /* Filtro por alérgenos */
    var filtro = document.getElementById("filtro-alergenos");
    if (filtro) filtro.addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-alergeno]");
      if (!b) return;
      var a = b.dataset.alergeno;
      var i = alergenosOcultos.indexOf(a);
      if (i === -1) alergenosOcultos.push(a); else alergenosOcultos.splice(i, 1);
      b.setAttribute("aria-pressed", i === -1 ? "true" : "false");
      b.setAttribute("aria-current", i === -1 ? "true" : "false");
      aplicarFiltros();
    });
  }

  /* Oculta los platos que llevan alguno de los alérgenos marcados en el filtro.
     Si el filtro está vacío (lo normal), se ve la carta entera. */
  function aplicarFiltros() {
    var visibles = 0;

    $$("#contenido-carta .categoria").forEach(function (sec) {
      var enCategoria = 0;
      $$(".plato", sec).forEach(function (p) {
        var als = (p.dataset.al || "").split(" ").filter(Boolean);
        var ver = !alergenosOcultos.some(function (a) { return als.indexOf(a) !== -1; });
        p.hidden = !ver;
        if (ver) enCategoria++;
      });
      sec.hidden = enCategoria === 0;
      visibles += enCategoria;
    });

    var aviso = document.getElementById("sin-resultados");
    if (aviso) aviso.classList.toggle("oculto", visibles > 0);
  }

  /* ======================================================================
     7. IDIOMA, TEMA Y ANIMACIONES
     ====================================================================== */
  function aplicarTextos() {
    document.documentElement.lang = idioma;
    $$("[data-t]").forEach(function (el) {
      var v = t(el.dataset.t);
      if (v) el.textContent = v;
    });
    $$("[data-t-ph]").forEach(function (el) {
      var v = t(el.dataset.tPh);
      if (v) el.setAttribute("placeholder", v);
    });
    var sel = document.getElementById("sel-idioma");
    if (sel) {
      sel.value = idioma;
      sel.setAttribute("aria-label", t("idiomaLabel"));
    }
  }

  function pintarTodo() {
    aplicarTextos();
    pintarAvisosGlobales();
    pintarMenuDelDia();
    pintarBocadillos();
    pintarOfertas();
    pintarCarta();
    pintarHorarios();
    pintarPie();
    pintarEstado();
    sincronizarSchema();
    aplicarFiltros();
    var panel = vistaActiva ? document.getElementById(vistaPorId(vistaActiva).panel) : null;
    if (panel) observarRevelados(panel);
  }

  /* Los tres idiomas de la web. El español es el de partida. */
  var IDIOMAS = ["es", "ca", "en"];

  function iniciarIdioma() {
    /* 1) el que eligió antes en este móvil · 2) el del navegador · 3) español */
    var elegido = null;
    try {
      var guardado = localStorage.getItem("bj-idioma");
      if (IDIOMAS.indexOf(guardado) !== -1) elegido = guardado;
    } catch (e) {}

    if (!elegido) {
      var delNavegador = (navigator.languages || [navigator.language || ""])
        .map(function (l) { return String(l).slice(0, 2).toLowerCase(); })
        .filter(function (l) { return IDIOMAS.indexOf(l) !== -1; })[0];
      if (delNavegador) elegido = delNavegador;
    }
    idioma = elegido || "es";

    var sel = document.getElementById("sel-idioma");
    if (sel) sel.addEventListener("change", function () {
      if (IDIOMAS.indexOf(sel.value) === -1) return;
      idioma = sel.value;
      try { localStorage.setItem("bj-idioma", idioma); } catch (e) {}
      var y = window.scrollY;
      pintarTodo();
      window.scrollTo({ top: y, behavior: "auto" });
    });
  }

  /* Tema: automático según el móvil (prefers-color-scheme).
     El botón permite forzarlo y se recuerda en ese móvil. */
  function iniciarTema() {
    var guardado = null;
    try { guardado = localStorage.getItem("bj-tema"); } catch (e) {}
    if (guardado === "claro" || guardado === "oscuro") {
      document.documentElement.setAttribute("data-tema", guardado);
    }
    actualizarBotonTema();

    var b = document.getElementById("btn-tema");
    if (b) b.addEventListener("click", function () {
      var nuevo = temaEfectivo() === "oscuro" ? "claro" : "oscuro";
      document.documentElement.setAttribute("data-tema", nuevo);
      try { localStorage.setItem("bj-tema", nuevo); } catch (e) {}
      actualizarBotonTema();
    });
  }

  function temaEfectivo() {
    var forzado = document.documentElement.getAttribute("data-tema");
    if (forzado === "claro" || forzado === "oscuro") return forzado;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro";
  }

  function actualizarBotonTema() {
    var b = document.getElementById("btn-tema");
    var ico = document.getElementById("icono-tema");
    if (!b) return;
    var oscuro = temaEfectivo() === "oscuro";
    if (ico) ico.textContent = oscuro ? "☀" : "☾";
    b.setAttribute("aria-pressed", oscuro ? "true" : "false");
    b.setAttribute("aria-label", oscuro ? t("temaClaro") : t("temaOscuro"));
  }

  /* Aparición suave de tarjetas y secciones (solo opacidad y desplazamiento) */
  var observador = null;
  function iniciarAnimaciones() {
    if (!("IntersectionObserver" in window)) {
      $$(".revelar").forEach(function (e) { e.classList.add("visible"); });
      return;
    }
    observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("visible");
        observador.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  }

  function observarRevelados(ctx) {
    if (!observador) {
      $$(".revelar", ctx).forEach(function (e) { e.classList.add("visible"); });
      return;
    }
    $$(".revelar:not(.visible)", ctx).forEach(function (e) { observador.observe(e); });
  }

  /* ======================================================================
     ARRANQUE
     ====================================================================== */
  function mensajeDeError() {
    var main = document.getElementById("contenido");
    if (!main) return;
    main.innerHTML =
      '<div class="error-datos">' +
        '<span class="icono" aria-hidden="true">🍽️</span>' +
        "<h1>" + esc(t("errorTitulo")) + "</h1>" +
        "<p>" + esc(t("errorTexto")) + "</p>" +
        '<p style="margin-top:1rem"><strong>Restaurant BJ</strong><br>Carrer de Llull, 13 · 08005 Barcelona</p>' +
      "</div>";
    var nav = document.getElementById("nav-principal");
    if (nav) nav.hidden = true;
    var est = document.getElementById("estado");
    if (est) est.hidden = true;
  }

  function datosValidos(d) {
    return d && typeof d === "object" &&
      (d.menuDelDia || d.carta || d.bocadillos || d.ofertas);
  }

  function arrancar() {
    /* Si datos.js falta o tiene una errata, no se rompe la página:
       se enseña un mensaje amable. */
    var candidato = (typeof DATOS !== "undefined") ? DATOS : null;
    if (!datosValidos(candidato)) { mensajeDeError(); return; }
    D = candidato;

    try {
      iniciarIdioma();
      iniciarTema();
      iniciarAnimaciones();
      pintarTodo();
      iniciarCarta();
      iniciarNavegacion();

      /* El indicador de abierto/cerrado se refresca solo cada minuto */
      setInterval(pintarEstado, 60000);

      /* Si el sistema cambia de tema, seguimos al sistema salvo que se haya forzado */
      if (window.matchMedia) {
        var mq = window.matchMedia("(prefers-color-scheme: dark)");
        var alCambiar = function () { actualizarBotonTema(); };
        if (mq.addEventListener) mq.addEventListener("change", alCambiar);
        else if (mq.addListener) mq.addListener(alCambiar);
      }
    } catch (e) {
      if (window.console) console.error("BJ:", e);
      mensajeDeError();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", arrancar);
  } else {
    arrancar();
  }
})();
