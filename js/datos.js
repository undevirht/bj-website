/* ============================================================================
   BJ · ARCHIVO DE DATOS
   ----------------------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR EN EL DÍA A DÍA.
   Cambia lo que quieras, guarda el archivo, recarga la web. Ya está.

   TRES REGLAS PARA NO ROMPER NADA
   1. El texto va siempre entre comillas dobles:  "Ensalada con atún"
   2. Cada línea de una lista acaba en coma, MENOS la última.
   3. Si dentro de un texto necesitas comillas, usa comillas simples: 'así'.

   CÓMO SE ESCRIBE UN PLATO
     { es: "Nombre en español", en: "Name in English", ca: "Nom en català",
       price: "9,00 €" }
     - es      → nombre en español (obligatorio)
     - en      → nombre en inglés
     - ca      → nombre en catalán
     - price   → precio tal cual se muestra. Formato español: "12,50 €"
     - al      → OPCIONAL. Alérgenos del plato. Ver la lista más abajo.
     - etiq    → OPCIONAL. Etiquetas: "vegetariano", "picante", "novedad", "agotado"

   IDIOMAS
   La web está en español, catalán e inglés. Si a un plato le falta el catalán
   o el inglés, la web enseña el español en su lugar: nunca se queda en blanco.
   Al añadir un plato nuevo, lo cómodo es copiar la línea de otro parecido.

   ALÉRGENOS (opcional, campo "al")
   La web actual NO indica alérgenos por plato, así que están todos vacíos.
   [PENDIENTE: el local debe revisar plato por plato y rellenar este campo.]
   En cuanto UN SOLO plato tenga alérgenos, la web enseña sola la leyenda y el
   filtro por alérgenos. Se escribe así:
     { es: "Croquetas de pollo", en: "Chicken croquettes", ca: "Croquetes de pollastre",
       price: "4,90 €", al: ["gluten", "lacteos", "huevos"] },
   Palabras válidas (los 14 de declaración obligatoria en la UE):
     gluten, crustaceos, huevos, pescado, cacahuetes, soja, lacteos,
     frutos-cascara, apio, mostaza, sesamo, sulfitos, altramuces, moluscos

   FECHAS: siempre en formato "AAAA-MM-DD".  Ejemplo: "2026-09-21"
   DÍAS DE LA SEMANA: se numeran 0 = lunes, 1 = martes ... 5 = sábado, 6 = domingo
   ============================================================================ */

const DATOS = {

  /* ==========================================================================
     0. TRADUCCIÓN AL CATALÁN PENDIENTE DE REVISIÓN
     --------------------------------------------------------------------------
     La web actual solo estaba en español e inglés. El catalán se ha añadido
     ahora, así que conviene que lo repase alguien catalanoparlante del local.
     Mientras esto valga true, la web enseña un aviso discreto arriba cuando
     está en catalán.
     CUANDO ESTÉ REVISADO: cambia true por false y el aviso desaparece.
     ========================================================================== */
  revisarCatalan: true,

  /* ==========================================================================
     1. DATOS DEL LOCAL  (se tocan casi nunca)
     ========================================================================== */
  local: {
    nombre: "Restaurant BJ",
    direccion: "Carrer de Llull, 13",
    barrio: "Sant Martí",
    cp: "08005",
    ciudad: "Barcelona",
    pais: "ES",

    // Enlace a Google Maps (enlace, no mapa incrustado: pesa cero y no pone cookies)
    maps: "https://www.google.com/maps/search/?api=1&query=Restaurant%20BJ%2C%20Carrer%20de%20Llull%2013%2C%2008005%20Barcelona",

    // Deja "" en lo que no exista todavía: la web simplemente no lo enseña.
    telefono: "",   // [PENDIENTE: teléfono del local, p. ej. "+34 93 000 00 00"]
    email: "",      // [PENDIENTE: email de contacto]
    whatsapp: "",   // [PENDIENTE: número de WhatsApp en formato internacional, p. ej. "34600000000"]

    redes: {
      instagram: "",   // [PENDIENTE: URL completa]
      facebook: "",    // [PENDIENTE: URL completa]
      tiktok: ""       // [PENDIENTE: URL completa]
    },

    // Reservas. Deja "" si no se aceptan o todavía no se sabe.
    reservas: "",   // [PENDIENTE: ¿se aceptan reservas? ¿por teléfono, WhatsApp, algún enlace?]

    // Frase que ya estaba en el pie de la carta de la web actual.
    avisoAlergias: {
      es: "Si tienes alguna alergia, consulta a nuestros empleados",
      en: "If you have any allergies, please ask our staff",
      ca: "Si tens alguna al·lèrgia, consulta els nostres empleats"
    },

    // Texto de la sección "La casa" de la web actual.
    historia: {
      es: "Somos un negocio familiar sirviendo al barrio desde hace años. Sin pretensiones: buena comida, buen precio y caras conocidas.",
      en: "We are a family business that has served this neighborhood for years. No frills: good food, fair prices, familiar faces.",
      ca: "Som un negoci familiar que serveix el barri des de fa anys. Sense pretensions: bon menjar, bon preu i cares conegudes."
    },

    // Reclamos de la cabecera de la web actual.
    lema: {
      es: "Comida casera, rápida y honesta",
      en: "Honest, fast, homemade food",
      ca: "Menjar casolà, ràpid i honest"
    },
    ubicacionCorta: {
      es: "A 2 minutos de la UPF Ciutadella · Vila Olímpica, Barcelona",
      en: "2 minutes from UPF Ciutadella · Vila Olímpica, Barcelona",
      ca: "A 2 minuts de la UPF Ciutadella · Vila Olímpica, Barcelona"
    },

    // Textos legales. Cada uno: { titulo: {es,en}, url: "" }  ó  texto completo.
    // La web actual no tiene ninguno.
    legales: [],  // [PENDIENTE: aviso legal, política de privacidad, hojas de reclamación]

    // Fotos del local. Van en la carpeta img/ y se escriben así:
    //   { src: "img/exterior.webp", w: 800, h: 600,
    //     alt: { es: "Fachada de Restaurant BJ", en: "Restaurant BJ from the street",
    //            ca: "Façana del Restaurant BJ" } }
    // Consejo: exporta las fotos en WebP y a 800 px de ancho como mucho.
    // [PENDIENTE: fotos reales del local. La web actual tenía los huecos vacíos.]
    fotos: []
  },

  /* ==========================================================================
     2. AVISOS  (festivos, vacaciones, cierres puntuales)
     --------------------------------------------------------------------------
     Salen arriba del todo y en la vista de Horarios.
     Para quitar un aviso, bórralo o ponle una fecha "hasta" ya pasada.
     tipo: "info" (azul) · "aviso" (naranja) · "cierre" (rojo)
     Ejemplo:
       { tipo: "cierre", desde: "2026-08-01", hasta: "2026-08-15",
         es: "Cerrado por vacaciones del 1 al 15 de agosto",
         en: "Closed for holidays, 1–15 August",
         ca: "Tancat per vacances de l'1 al 15 d'agost" }
     ========================================================================== */
  avisos: [
    // (vacío: ahora mismo no hay ningún aviso)
  ],

  /* ==========================================================================
     3. HORARIOS
     --------------------------------------------------------------------------
     Una línea por día, SIEMPRE en este orden: lunes, martes, miércoles, jueves,
     viernes, sábado, domingo.
     Cada día es una lista de tramos: [["07:00","17:00"]]
     Dos tramos (cierre al mediodía):  [["07:00","16:00"], ["19:00","23:00"]]
     Cerrado todo el día:              []
     Horario que pasa de medianoche:   [["19:00","01:30"]]  (la web lo entiende)
     Hora siempre en 24 h y con dos cifras: "08:00", no "8:00".
     ========================================================================== */
  horarios: {

    // Horario del BAR (el de la web actual)
    bar: [
      [["07:00", "17:00"]],   // lunes
      [["07:00", "23:00"]],   // martes
      [["07:00", "23:00"]],   // miércoles
      [["07:00", "23:00"]],   // jueves
      [["07:00", "23:00"]],   // viernes
      [["08:00", "23:00"]],   // sábado
      [["09:00", "16:00"]]    // domingo
    ],

    // Horario de COCINA, si es distinto del bar.
    // Pon  cocina: null  si es el mismo horario que el bar.
    // [PENDIENTE: la web actual no distingue bar y cocina. Confirmar horario de cocina.]
    cocina: null
  },

  /* ==========================================================================
     4. MENÚ DEL DÍA  ← ESTO ES LO QUE SE CAMBIA CADA DÍA
     --------------------------------------------------------------------------
     PASO 1: cambia "fecha" por la fecha del menú de hoy.
     PASO 2: cambia los platos de "primeros" y "segundos".
     PASO 3: guarda el archivo.
     Si la fecha no es la de hoy, la web enseña la fecha real del menú
     (no dice "hoy") para que nadie se confunda.
     ========================================================================== */
  menuDelDia: {

    // Fecha del menú. Formato "AAAA-MM-DD".
    fecha: "2026-09-21",

    price: "12,50 €",
    incluye: { es: "Pan, bebida y postre o café incluidos", en: "Bread, drink and dessert or coffee included", ca: "Pa, beguda i postres o cafè inclosos" },

    // Días y horas en que se sirve el menú.
    // dias: 0 = lunes ... 6 = domingo.  Los días que no estén aquí enseñan
    // el mensaje de "hoy no hay menú del día".
    servicio: {
      dias: [0, 1, 2, 3, 4],   // [PENDIENTE: confirmar qué días se sirve el menú del día]
      horario: ""              // [PENDIENTE: horas del menú del día, p. ej. "13:00 – 16:00"]
    },

    primeros: [
      { es: "Ensalada con atún", en: "Tuna salad", ca: "Amanida amb tonyina" },
      { es: "Ravioli a la napolitana", en: "Ravioli napolitana", ca: "Raviolis a la napolitana" },
      { es: "Rollitos de primavera", en: "Spring rolls", ca: "Rotllets de primavera" },
      { es: "Arroz tres delicias", en: "Three-delight fried rice", ca: "Arròs tres delícies" },
      { es: "Tortilla con chorizo", en: "Chorizo omelette", ca: "Truita amb xoriço" }
    ],
    segundos: [
      { es: "Galta al horno", en: "Slow-baked pork cheek", ca: "Galta al forn" },
      { es: "Solomillo de cerdo a la plancha", en: "Grilled pork sirloin", ca: "Filet de porc a la planxa" },
      { es: "Alitas de pollo rebozadas", en: "Battered chicken wings", ca: "Aletes de pollastre arrebossades" },
      { es: "Calamares a la romana", en: "Fried squid rings", ca: "Calamars a la romana" },
      { es: "Bistec de ternera", en: "Veal steak", ca: "Bistec de vedella" }
    ],

    // Postres del menú, si se listan. Si se deja vacío no aparece nada.
    // La web actual no lista postres (el postre o café va incluido).
    postres: []
  },

  /* ==========================================================================
     5. BOCADILLOS DEL DÍA  ← también cambia a menudo
     --------------------------------------------------------------------------
     Un bocadillo por día de la semana. El de hoy sale resaltado.
     Campos opcionales de cada día:
       al:    ["gluten", "lacteos"]              → alérgenos
       etiq:  ["vegetariano", "picante",
               "novedad", "agotado"]             → etiquetas de color
       opciones: { es: "Pan de payés o baguette · frío o caliente",
                   en: "Rustic bread or baguette · cold or hot",
                   ca: "Pa de pagès o baguet · fred o calent" }
     Ejemplo completo:
       { dia: { es: "Lunes", en: "Monday" }, es: "Jamón o lomo", en: "Ham or pork loin",
         etiq: ["novedad"], al: ["gluten"] },
     ========================================================================== */
  bocadillos: {
    titulo: { es: "Bocadillo del día", en: "Sandwich of the day", ca: "Entrepà del dia" },
    price: "3,00 €",

    // Opciones que valen para todos los bocadillos del día. "" = no se muestra.
    opciones: { es: "", en: "", ca: "" },   // [PENDIENTE: ¿tamaños, tipo de pan, frío/caliente?]

    dias: [
      { dia: { es: "Lunes", en: "Monday", ca: "Dilluns" },       es: "Jamón o lomo",                    en: "Ham or pork loin", ca: "Pernil o llom" },
      { dia: { es: "Martes", en: "Tuesday", ca: "Dimarts" },     es: "Tortilla de patatas casera o fuet", en: "Homemade Spanish omelette or fuet", ca: "Truita de patates casolana o fuet" },
      { dia: { es: "Miércoles", en: "Wednesday", ca: "Dimecres" },es: "Pechuga de pollo o queso semi",   en: "Chicken breast or semi-cured cheese", ca: "Pit de pollastre o formatge semi" },
      { dia: { es: "Jueves", en: "Thursday", ca: "Dijous" },    es: "Tortilla francesa o atún",        en: "Omelette or tuna", ca: "Truita a la francesa o tonyina" },
      { dia: { es: "Viernes", en: "Friday", ca: "Divendres" },     es: "Bacon o chorizo",                 en: "Bacon or chorizo", ca: "Bacó o xoriço" }
    ]
  },

  /* ==========================================================================
     6. MENÚS Y OFERTAS
     --------------------------------------------------------------------------
     Se muestran en tarjetas, agrupadas.
     Campos opcionales de cada oferta:
       condiciones: { es: "Solo para llevar", en: "Takeaway only", ca: "Només per emportar" }
       vigencia: { desde: "2026-09-01", hasta: "2026-09-30",   → fechas (opcional)
                   dias: [0,1,2,3,4],                          → días (opcional)
                   horas: "17:00-19:00" }                      → franja (opcional)
     Una oferta con la fecha "hasta" ya pasada DESAPARECE SOLA de la web.
     Sin "vigencia", la oferta se considera siempre vigente.
     ========================================================================== */
  ofertas: [
    {
      grupo: { es: "Menús de bocadillo y burger", en: "Sandwich & burger menus", ca: "Menús d'entrepà i hamburguesa" },
      items: [
    { es: "Menú 4: bocadillo a elegir + Coca-Cola", en: "Menu 4: your choice of sandwich + Coca-Cola", ca: "Menú 4: entrepà a triar + Coca-Cola", price: "5,90 €" },
    { es: "Menú 5: bocadillo + queso + Coca-Cola", en: "Menu 5: sandwich + cheese + Coca-Cola", ca: "Menú 5: entrepà + formatge + Coca-Cola", price: "6,50 €" },
    { es: "Menú 6 (oferta de la casa): bocadillo a elegir + bebida", en: "Menu 6 (house offer): your choice of sandwich + drink", ca: "Menú 6 (oferta de la casa): entrepà a triar + beguda", price: "8,50 €" },
    { es: "Menú burger 1: bacon, queso y patatas + bebida", en: "Burger menu 1: bacon, cheese, fries + drink", ca: "Menú hamburguesa 1: bacó, formatge i patates + beguda", price: "8,00 €" },
    { es: "Menú burger 2: bacon, queso, lechuga, tomate, patatas + bebida", en: "Burger menu 2: bacon, cheese, lettuce, tomato, fries + drink", ca: "Menú hamburguesa 2: bacó, formatge, enciam, tomàquet, patates + beguda", price: "9,00 €" },
    { es: "Menú burger 3: nuggets, patatas de luxe + bebida", en: "Burger menu 3: nuggets, deluxe fries + drink", ca: "Menú hamburguesa 3: nuggets, patates de luxe + beguda", price: "10,00 €" }
      ]
    },
    {
      grupo: { es: "Desayunos", en: "Breakfast", ca: "Esmorzars" },
      // [PENDIENTE: ¿hay una franja horaria para los desayunos? Si la hay, añade
      //  horas: "07:00-11:30" dentro de un campo vigencia en cada desayuno.]
      items: [
    { es: "Café + pasta (croissant, magdalena o donut)", en: "Coffee + pastry (croissant, muffin or donut)", ca: "Cafè + brioixeria (croissant, magdalena o dònut)", price: "2,50 €" },
    { es: "Bocadillo pequeño + café", en: "Small sandwich + coffee", ca: "Entrepà petit + cafè", price: "3,50 €" },
    { es: "Bocadillo pequeño + bebida", en: "Small sandwich + drink", ca: "Entrepà petit + beguda", price: "4,50 €" },
    { es: "Café + bikini", en: "Coffee + ham & cheese toastie", ca: "Cafè + bikini", price: "4,50 €" }
      ]
    }
  ],

  /* ==========================================================================
     7. LA CARTA  (cambia poco: solo cuando suben los precios)
     --------------------------------------------------------------------------
     Una categoría por bloque. Dentro, la lista de platos.
     "nota" es una línea de texto que sale debajo del título de la categoría.
     El orden de las categorías aquí es el orden en que salen en la web.
     ========================================================================== */
  carta: [
    {
      categoria: { es: "Platos combinados", en: "Combo plates", ca: "Plats combinats" },
      nota: { es: "Extras: + ensalada 1,50 € · + huevo 1,00 € · + arroz blanco 1,50 €", en: "Extras: + salad €1.50 · + egg €1.00 · + white rice €1.50", ca: "Extres: + amanida 1,50 € · + ou 1,00 € · + arròs blanc 1,50 €" },
      items: [
        { es: "Lomo con patatas fritas y huevo", en: "Pork loin with fries and egg", ca: "Llom amb patates fregides i ou", price: "9,00 €" },
        { es: "Hamburguesa con queso, patatas fritas y huevo", en: "Cheeseburger with fries and egg", ca: "Hamburguesa amb formatge, patates fregides i ou", price: "9,50 €" },
        { es: "Frankfurt con patatas fritas y huevo", en: "Frankfurt with fries and egg", ca: "Frankfurt amb patates fregides i ou", price: "9,50 €" },
        { es: "Butifarra con patatas fritas y huevo", en: "Catalan sausage with fries and egg", ca: "Botifarra amb patates fregides i ou", price: "10,00 €" },
        { es: "Calamares a la romana con patatas y ensalada", en: "Fried squid rings with fries and salad", ca: "Calamars a la romana amb patates i amanida", price: "10,00 €" },
        { es: "Croquetas con huevo y patatas", en: "Croquettes with egg and fries", ca: "Croquetes amb ou i patates", price: "9,00 €" },
        { es: "Bistec de ternera con patatas fritas y huevo", en: "Veal steak with fries and egg", ca: "Bistec de vedella amb patates fregides i ou", price: "10,90 €" },
        { es: "Escalopa de cerdo o pollo con patatas y ensalada mixta", en: "Pork or chicken escalope with fries and mixed salad", ca: "Escalopa de porc o pollastre amb patates i amanida mixta", price: "10,50 €" },
        { es: "Muslo de pollo rebozado", en: "Battered chicken thigh", ca: "Cuixa de pollastre arrebossada", price: "10,50 €" },
        { es: "Tortilla con jamón y pan con tomate", en: "Omelette with ham and tomato bread", ca: "Truita amb pernil i pa amb tomàquet", price: "9,00 €" },
        { es: "Bacon con patatas y huevo", en: "Bacon with fries and egg", ca: "Bacó amb patates i ou", price: "9,00 €" },
        { es: "Tortilla de patatas con ensalada y patatas fritas", en: "Spanish omelette with salad and fries", ca: "Truita de patates amb amanida i patates fregides", price: "9,00 €" },
        { es: "Pechuga de pollo a la plancha con patatas y huevo", en: "Grilled chicken breast with fries and egg", ca: "Pit de pollastre a la planxa amb patates i ou", price: "9,50 €" },
        { es: "Torrezno, huevos y patatas", en: "Torrezno, eggs and fries", ca: "Torrezno, ous i patates", price: "10,50 €" },
        { es: "Patatas de luxe con nuggets y hamburguesa", en: "Deluxe fries with nuggets and burger", ca: "Patates de luxe amb nuggets i hamburguesa", price: "10,50 €" },
        { es: "Libritos de lomo, patatas y huevo", en: "Stuffed pork loin with fries and egg", ca: "Llibrets de llom, patates i ou", price: "10,50 €" },
        { es: "Entrecot a la piedra 250 g", en: "Stone-cooked entrecote 250 g", ca: "Entrecot a la pedra 250 g", price: "14,90 €" },
        { es: "Pollo agridulce", en: "Sweet and sour chicken", ca: "Pollastre agredolç", price: "12,00 €" },
        { es: "Huevos estrellados con jamón", en: "Broken eggs with ham", ca: "Ous estrellats amb pernil", price: "12,00 €" }
      ]
    },
    {
      categoria: { es: "Tapas", en: "Tapas", ca: "Tapes" },
      items: [
        { es: "Jamón serrano (pan con tomate)", en: "Serrano ham (tomato bread)", ca: "Pernil serrà (pa amb tomàquet)", price: "10,00 €" },
        { es: "Queso semi (pan con tomate)", en: "Semi-cured cheese (tomato bread)", ca: "Formatge semi (pa amb tomàquet)", price: "10,00 €" },
        { es: "Croquetas de pollo (6 und.)", en: "Chicken croquettes (6 pcs)", ca: "Croquetes de pollastre (6 u.)", price: "4,90 €" },
        { es: "Calamares a la romana", en: "Fried squid rings", ca: "Calamars a la romana", price: "6,80 €" },
        { es: "Patatas bravas", en: "Patatas bravas", ca: "Patates braves", price: "5,50 €" },
        { es: "Torrezno ibérico", en: "Iberian torrezno", ca: "Torrezno ibèric", price: "7,50 €" },
        { es: "Ensalada variada", en: "Mixed salad", ca: "Amanida variada", price: "7,30 €" },
        { es: "Ensalada con atún", en: "Tuna salad", ca: "Amanida amb tonyina", price: "7,80 €" },
        { es: "Ensalada de tomate con queso fresco", en: "Tomato salad with fresh cheese", ca: "Amanida de tomàquet amb formatge fresc", price: "7,80 €" },
        { es: "Tiras de calamar", en: "Squid strips", ca: "Tires de calamar", price: "7,50 €" },
        { es: "Patatas fritas", en: "French fries", ca: "Patates fregides", price: "5,50 €" },
        { es: "Pincho de tortilla de patatas", en: "Slice of Spanish omelette", ca: "Tall de truita de patates", price: "4,50 €" },
        { es: "Olivas rellenas", en: "Stuffed olives", ca: "Olives farcides", price: "3,30 €" },
        { es: "Alitas de pollo (8 und.)", en: "Chicken wings (8 pcs)", ca: "Aletes de pollastre (8 u.)", price: "6,50 €" },
        { es: "Wantun frito (10 und.)", en: "Fried wonton (10 pcs)", ca: "Wantun fregit (10 u.)", price: "7,80 €" },
        { es: "Arroz con gambas", en: "Prawn rice", ca: "Arròs amb gambes", price: "8,00 €" },
        { es: "Rollitos de primavera (8 und.)", en: "Spring rolls (8 pcs)", ca: "Rotllets de primavera (8 u.)", price: "4,50 €" },
        { es: "Empanadillas chinas (12 und.)", en: "Chinese dumplings (12 pcs)", ca: "Empanadetes xineses (12 u.)", price: "7,50 €" },
        { es: "Ternera con arroz", en: "Beef with rice", ca: "Vedella amb arròs", price: "9,00 €" },
        { es: "Arroz con pollo y curry (700 g)", en: "Chicken curry rice (700 g)", ca: "Arròs amb pollastre i curri (700 g)", price: "7,00 €" },
        { es: "Arroz tres delicias (700 g)", en: "Three-delight rice (700 g)", ca: "Arròs tres delícies (700 g)", price: "7,00 €" },
        { es: "Tallarines especial tres delicias", en: "Special three-delight noodles", ca: "Tallarines especial tres delícies", price: "7,00 €" },
        { es: "Espaguetis con tomate", en: "Spaghetti with tomato", ca: "Espaguetis amb tomàquet", price: "6,50 €" },
        { es: "Tallarines con gambas (700 g)", en: "Prawn noodles (700 g)", ca: "Tallarines amb gambes (700 g)", price: "8,00 €" }
      ]
    },
    {
      categoria: { es: "Bocadillos calientes", en: "Hot sandwiches", ca: "Entrepans calents" },
      nota: { es: "Dos precios = medio / entero", en: "Two prices = half / whole", ca: "Dos preus = mig / sencer" },
      items: [
        { es: "Lomo", en: "Pork loin", ca: "Llom", price: "3,00 / 4,50 €" },
        { es: "Bacon", en: "Bacon", ca: "Bacó", price: "3,00 / 4,50 €" },
        { es: "Lomo con queso", en: "Pork loin with cheese", ca: "Llom amb formatge", price: "3,50 / 5,10 €" },
        { es: "Bacon con queso", en: "Bacon with cheese", ca: "Bacó amb formatge", price: "3,50 / 5,10 €" },
        { es: "Lomo con queso y pimiento", en: "Pork loin with cheese and pepper", ca: "Llom amb formatge i pebrot", price: "4,00 / 6,00 €" },
        { es: "Lomo con queso y bacon", en: "Pork loin with cheese and bacon", ca: "Llom amb formatge i bacó", price: "4,00 / 6,00 €" },
        { es: "Tortilla francesa", en: "Omelette", ca: "Truita a la francesa", price: "3,00 / 4,50 €" },
        { es: "Tortilla al gusto (queso, chorizo o jamón dulce)", en: "Custom omelette (cheese, chorizo or ham)", ca: "Truita al gust (formatge, xoriço o pernil dolç)", price: "3,50 / 5,10 €" },
        { es: "Tortilla de patatas", en: "Spanish omelette", ca: "Truita de patates", price: "3,00 / 4,50 €" },
        { es: "Pechuga de pollo", en: "Chicken breast", ca: "Pit de pollastre", price: "3,00 / 4,50 €" },
        { es: "Pollo con queso", en: "Chicken with cheese", ca: "Pollastre amb formatge", price: "3,50 / 5,10 €" },
        { es: "Pollo rebozado con lechuga y mahonesa", en: "Battered chicken with lettuce and mayo", ca: "Pollastre arrebossat amb enciam i maionesa", price: "4,00 / 6,00 €" },
        { es: "Calamares a la romana", en: "Fried squid rings", ca: "Calamars a la romana", price: "5,10 €" },
        { es: "Salchichas del país", en: "Country sausages", ca: "Salsitxes del país", price: "5,00 €" },
        { es: "Salchicha con cebolla y alioli", en: "Sausage with onion and aioli", ca: "Salsitxa amb ceba i allioli", price: "6,00 €" },
        { es: "Bikini", en: "Ham & cheese toastie", ca: "Bikini", price: "3,80 €" },
        { es: "Frankfurt", en: "Frankfurt", ca: "Frankfurt", price: "4,50 €" },
        { es: "Serranito (jamón serrano, lomo, pimiento verde)", en: "Serranito (serrano ham, pork loin, green pepper)", ca: "Serranito (pernil serrà, llom, pebrot verd)", price: "4,00 / 6,00 €" },
        { es: "Butifarra", en: "Catalan sausage", ca: "Botifarra", price: "5,00 €" },
        { es: "Butifarra con cebolla y alioli", en: "Catalan sausage with onion and aioli", ca: "Botifarra amb ceba i allioli", price: "6,00 €" },
        { es: "Sobrasada con queso", en: "Sobrasada with cheese", ca: "Sobrassada amb formatge", price: "6,00 €" },
        { es: "Canadiense (pollo, lechuga, tomate, queso, mahonesa)", en: "Canadian (chicken, lettuce, tomato, cheese, mayo)", ca: "Canadenc (pollastre, enciam, tomàquet, formatge, maionesa)", price: "4,00 / 6,00 €" }
      ]
    },
    {
      categoria: { es: "Bocadillos fríos", en: "Cold sandwiches", ca: "Entrepans freds" },
      nota: { es: "Dos precios = medio / entero", en: "Two prices = half / whole", ca: "Dos preus = mig / sencer" },
      items: [
        { es: "Jamón serrano", en: "Serrano ham", ca: "Pernil serrà", price: "3,00 / 4,50 €" },
        { es: "Jamón serrano con queso", en: "Serrano ham with cheese", ca: "Pernil serrà amb formatge", price: "3,50 / 5,50 €" },
        { es: "Chorizo", en: "Chorizo", ca: "Xoriço", price: "3,00 / 4,50 €" },
        { es: "Longaniza / fuet", en: "Fuet sausage", ca: "Llonganissa / fuet", price: "3,00 / 4,50 €" },
        { es: "Atún", en: "Tuna", ca: "Tonyina", price: "3,00 / 4,50 €" },
        { es: "Atún con oliva", en: "Tuna with olives", ca: "Tonyina amb olives", price: "3,50 / 5,50 €" },
        { es: "Anchoa", en: "Anchovy", ca: "Anxova", price: "4,50 €" },
        { es: "Anchoa con oliva", en: "Anchovy with olives", ca: "Anxova amb olives", price: "5,50 €" },
        { es: "Vegetal de atún (lechuga, tomate, atún, mahonesa)", en: "Tuna veggie (lettuce, tomato, tuna, mayo)", ca: "Vegetal de tonyina (enciam, tomàquet, tonyina, maionesa)", price: "3,50 / 5,50 €" },
        { es: "Vegetal de queso (lechuga, tomate, queso, mahonesa)", en: "Cheese veggie (lettuce, tomato, cheese, mayo)", ca: "Vegetal de formatge (enciam, tomàquet, formatge, maionesa)", price: "3,50 / 5,50 €" },
        { es: "Queso", en: "Cheese", ca: "Formatge", price: "3,00 / 4,50 €" }
      ]
    },
    {
      categoria: { es: "Hamburguesas", en: "Burgers", ca: "Hamburgueses" },
      items: [
        { es: "Hamburguesa sola", en: "Plain burger", ca: "Hamburguesa sola", price: "4,00 €" },
        { es: "Hamburguesa con queso", en: "Cheeseburger", ca: "Hamburguesa amb formatge", price: "4,50 €" },
        { es: "Hamburguesa completa", en: "Full burger", ca: "Hamburguesa completa", price: "5,40 €" },
        { es: "Hamburguesa de la casa (lechuga, tomate, cebolla, queso, bacon, huevo frito, mahonesa)", en: "House burger (lettuce, tomato, onion, cheese, bacon, fried egg, mayo)", ca: "Hamburguesa de la casa (enciam, tomàquet, ceba, formatge, bacó, ou ferrat, maionesa)", price: "6,50 €" }
      ]
    },
    {
      categoria: { es: "Cervezas y vinos", en: "Beers & wine", ca: "Cerveses i vins" },
      items: [
        { es: "Quinto o caña", en: "Small beer", ca: "Quinto o canya", price: "1,90 €" },
        { es: "Mediana Estrella Galicia", en: "Estrella Galicia bottle", ca: "Mitjana Estrella Galicia", price: "2,40 €" },
        { es: "Cerveza 0,0 / tostada sin alcohol", en: "Alcohol-free beer", ca: "Cervesa 0,0 / torrada sense alcohol", price: "2,60 €" },
        { es: "Voll Damm, Turia o 1906", en: "Voll Damm, Turia or 1906", ca: "Voll Damm, Turia o 1906", price: "2,80 €" },
        { es: "Copa de cerveza", en: "Glass of beer", ca: "Copa de cervesa", price: "2,50 €" },
        { es: "Jarra de cerveza 0,5 L", en: "Beer pitcher 0.5 L", ca: "Gerra de cervesa 0,5 L", price: "4,60 €" },
        { es: "Copa de vino", en: "Glass of wine", ca: "Copa de vi", price: "2,20 €" },
        { es: "Copa de vino Rioja", en: "Glass of Rioja", ca: "Copa de vi Rioja", price: "2,80 €" },
        { es: "Botella de vino", en: "Bottle of wine", ca: "Ampolla de vi", price: "7,00 €" },
        { es: "Tinto de verano", en: "Tinto de verano", ca: "Tinto de verano", price: "2,70 €" }
      ]
    },
    {
      categoria: { es: "Refrescos y agua", en: "Soft drinks & water", ca: "Refrescs i aigua" },
      items: [
        { es: "Coca-Cola, Sprite, Nestea, Cacaolat (lata)", en: "Coca-Cola, Sprite, Nestea, Cacaolat (can)", ca: "Coca-Cola, Sprite, Nestea, Cacaolat (llauna)", price: "2,40 €" },
        { es: "Refrescos botella de cristal 350 ml", en: "Soft drinks glass bottle 350 ml", ca: "Refrescs ampolla de vidre 350 ml", price: "2,50 €" },
        { es: "Zumo", en: "Juice", ca: "Suc", price: "2,40 €" },
        { es: "Zumo de naranja natural", en: "Fresh orange juice", ca: "Suc de taronja natural", price: "3,60 €" },
        { es: "Red Bull (lata)", en: "Red Bull (can)", ca: "Red Bull (llauna)", price: "2,60 €" },
        { es: "Agua mineral 0,5 L", en: "Mineral water 0.5 L", ca: "Aigua mineral 0,5 L", price: "1,60 €" },
        { es: "Agua mineral 1,5 L", en: "Mineral water 1.5 L", ca: "Aigua mineral 1,5 L", price: "2,30 €" },
        { es: "Vichy Catalán", en: "Vichy Catalán", ca: "Vichy Catalán", price: "2,40 €" }
      ]
    },
    {
      categoria: { es: "Cafés e infusiones", en: "Coffee & tea", ca: "Cafès i infusions" },
      items: [
        { es: "Café solo", en: "Espresso", ca: "Cafè sol", price: "1,50 €" },
        { es: "Cortado", en: "Cortado", ca: "Tallat", price: "1,60 €" },
        { es: "Café con leche", en: "Coffee with milk", ca: "Cafè amb llet", price: "1,70 €" },
        { es: "Café americano", en: "Americano", ca: "Cafè americà", price: "1,70 €" },
        { es: "Cappuccino", en: "Cappuccino", ca: "Cappuccino", price: "2,10 €" },
        { es: "Infusiones", en: "Tea & infusions", ca: "Infusions", price: "1,70 €" },
        { es: "Carajillo (coñac o ron)", en: "Carajillo (cognac or rum)", ca: "Carajillo (conyac o rom)", price: "2,20 €" },
        { es: "Carajillo de whisky o Bailey's", en: "Whisky or Bailey's carajillo", ca: "Carajillo de whisky o Bailey's", price: "2,60 €" },
        { es: "Trifásico (coñac o ron)", en: "Trifásico (cognac or rum)", ca: "Trifàsic (conyac o rom)", price: "2,20 €" },
        { es: "Trifásico de whisky", en: "Whisky trifásico", ca: "Trifàsic de whisky", price: "2,60 €" }
      ]
    },
    {
      categoria: { es: "Licores y copas", en: "Spirits", ca: "Licors i copes" },
      items: [
        { es: "Ponche, coñac, anís, ron", en: "Punch, cognac, anise, rum", ca: "Ponx, conyac, anís, rom", price: "2,50 €" },
        { es: "Vodka, whisky", en: "Vodka, whisky", ca: "Vodka, whisky", price: "3,00 €" },
        { es: "Torres 5 / Torres 10 / Magno / Bailey's", en: "Torres 5 / Torres 10 / Magno / Bailey's", ca: "Torres 5 / Torres 10 / Magno / Bailey's", price: "3,00 €" },
        { es: "Cubata (whisky, vodka, ginebra o ron)", en: "Mixed drink (whisky, vodka, gin or rum)", ca: "Cubata (whisky, vodka, ginebra o rom)", price: "5,50 / 7,50 €" }
      ]
    }
  ]
};
