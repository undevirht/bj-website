// ============================================================
//  MENÚ DE RESTAURANT BJ
//  Este es EL ÚNICO archivo que hay que tocar en el día a día.
//  Cambia los platos, guarda, y la web se actualiza sola.
//  Los textos "en" son la traducción al inglés de cada plato.
// ============================================================

const MENU_DATA = {

  // Fecha de la última actualización (se muestra en la web)
  updated: "2026-09-18",

  // ---------- MENÚ DEL DÍA ----------
  menuDelDia: {
    price: "X,XX €", // PENDIENTE: precio real
    incluye: { es: "Pan, bebida y postre o café incluidos", en: "Bread, drink and dessert or coffee included" },
    primeros: [
      { es: "Ejemplo: Lentejas caseras", en: "Example: Homemade lentil stew" },
      { es: "Ejemplo: Ensalada mixta", en: "Example: Mixed salad" }
    ],
    segundos: [
      { es: "Ejemplo: Pollo a la plancha con patatas", en: "Example: Grilled chicken with fries" },
      { es: "Ejemplo: Merluza a la romana", en: "Example: Battered hake" }
    ]
  },

  // ---------- OFERTA DEL DÍA ----------
  bocadilloDelDia: {
    es: "Medio bocadillo + café",
    en: "Half sandwich + coffee",
    price: "2 €",
    detalle: { es: "Ejemplo: hoy, de tortilla", en: "Example: today, Spanish omelette" }
  },

  // ---------- CARTA FIJA (se toca poco) ----------
  carta: [
    {
      categoria: { es: "Bocadillos", en: "Sandwiches" },
      items: [
        { es: "Ejemplo: Bocadillo de jamón", en: "Example: Cured ham sandwich", price: "X,XX €" }
      ]
    },
    {
      categoria: { es: "Tapas y raciones", en: "Tapas" },
      items: [
        { es: "Ejemplo: Patatas bravas", en: "Example: Patatas bravas", price: "X,XX €" }
      ]
    },
    {
      categoria: { es: "Bebidas y café", en: "Drinks & coffee" },
      items: [
        { es: "Café con leche", en: "Café con leche", price: "1 €" }
      ]
    }
  ]
};
