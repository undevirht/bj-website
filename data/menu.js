// ============================================================
//  MENÚ DE RESTAURANT BJ
//  Este es EL ÚNICO archivo que hay que tocar en el día a día.
//  Cambia los platos, guarda, y la web se actualiza sola.
//  Formato de cada plato: { es: "nombre", en: "name", price: "0,00 €" }
//  Bocadillos con dos precios = medio / entero
// ============================================================

const MENU_DATA = {

  // Fecha de la última actualización (se muestra en la web)
  updated: "2026-09-21",

  // ---------- MENÚ DEL DÍA (cambia cada día — editar aquí) ----------
  menuDelDia: {
    price: "12,50 €",
    incluye: { es: "Pan, bebida y postre o café incluidos", en: "Bread, drink and dessert or coffee included" },
    // OJO: cada plato acaba en coma, menos el último de la lista
    primeros: [
      { es: "Ensalada con atún", en: "Tuna salad" },
      { es: "Ravioli a la napolitana", en: "Ravioli napolitana" },
      { es: "Rollitos de primavera", en: "Spring rolls" },
      { es: "Arroz tres delicias", en: "Three-delight fried rice" },
      { es: "Tortilla con chorizo", en: "Chorizo omelette" }
    ],
    segundos: [
      { es: "Galta al horno", en: "Slow-baked pork cheek" },
      { es: "Solomillo de cerdo a la plancha", en: "Grilled pork sirloin" },
      { es: "Alitas de pollo rebozadas", en: "Battered chicken wings" },
      { es: "Calamares a la romana", en: "Fried squid rings" },
      { es: "Bistec de ternera", en: "Veal steak" }
    ]
  },

  // ---------- BOCADILLO DEL DÍA (oferta semanal fija) ----------
  bocadilloDelDia: {
    titulo: { es: "Bocadillo del día", en: "Sandwich of the day" },
    price: "3,00 €",
    dias: [
      { dia: { es: "Lunes", en: "Monday" },       es: "Jamón o lomo",                    en: "Ham or pork loin" },
      { dia: { es: "Martes", en: "Tuesday" },     es: "Tortilla de patatas casera o fuet", en: "Homemade Spanish omelette or fuet" },
      { dia: { es: "Miércoles", en: "Wednesday" },es: "Pechuga de pollo o queso semi",   en: "Chicken breast or semi-cured cheese" },
      { dia: { es: "Jueves", en: "Thursday" },    es: "Tortilla francesa o atún",        en: "Omelette or tuna" },
      { dia: { es: "Viernes", en: "Friday" },     es: "Bacon o chorizo",                 en: "Bacon or chorizo" }
    ]
  },

  // ---------- MENÚS DE OFERTA ----------
  ofertas: [
    { es: "Menú 4: bocadillo a elegir + Coca-Cola", en: "Menu 4: your choice of sandwich + Coca-Cola", price: "5,90 €" },
    { es: "Menú 5: bocadillo + queso + Coca-Cola", en: "Menu 5: sandwich + cheese + Coca-Cola", price: "6,50 €" },
    { es: "Menú 6 (oferta de la casa): bocadillo a elegir + bebida", en: "Menu 6 (house offer): your choice of sandwich + drink", price: "8,50 €" },
    { es: "Menú burger 1: bacon, queso y patatas + bebida", en: "Burger menu 1: bacon, cheese, fries + drink", price: "8,00 €" },
    { es: "Menú burger 2: bacon, queso, lechuga, tomate, patatas + bebida", en: "Burger menu 2: bacon, cheese, lettuce, tomato, fries + drink", price: "9,00 €" },
    { es: "Menú burger 3: nuggets, patatas de luxe + bebida", en: "Burger menu 3: nuggets, deluxe fries + drink", price: "10,00 €" }
  ],

  // ---------- DESAYUNOS ----------
  desayunos: [
    { es: "Café + pasta (croissant, magdalena o donut)", en: "Coffee + pastry (croissant, muffin or donut)", price: "2,50 €" },
    { es: "Bocadillo pequeño + café", en: "Small sandwich + coffee", price: "3,50 €" },
    { es: "Bocadillo pequeño + bebida", en: "Small sandwich + drink", price: "4,50 €" },
    { es: "Café + bikini", en: "Coffee + ham & cheese toastie", price: "4,50 €" }
  ],

  // ---------- CARTA FIJA ----------
  carta: [
    {
      categoria: { es: "Platos combinados", en: "Combo plates" },
      nota: { es: "Extras: + ensalada 1,50 € · + huevo 1,00 € · + arroz blanco 1,50 €", en: "Extras: + salad €1.50 · + egg €1.00 · + white rice €1.50" },
      items: [
        { es: "Lomo con patatas fritas y huevo", en: "Pork loin with fries and egg", price: "9,00 €" },
        { es: "Hamburguesa con queso, patatas fritas y huevo", en: "Cheeseburger with fries and egg", price: "9,50 €" },
        { es: "Frankfurt con patatas fritas y huevo", en: "Frankfurt with fries and egg", price: "9,50 €" },
        { es: "Butifarra con patatas fritas y huevo", en: "Catalan sausage with fries and egg", price: "10,00 €" },
        { es: "Calamares a la romana con patatas y ensalada", en: "Fried squid rings with fries and salad", price: "10,00 €" },
        { es: "Croquetas con huevo y patatas", en: "Croquettes with egg and fries", price: "9,00 €" },
        { es: "Bistec de ternera con patatas fritas y huevo", en: "Veal steak with fries and egg", price: "10,90 €" },
        { es: "Escalopa de cerdo o pollo con patatas y ensalada mixta", en: "Pork or chicken escalope with fries and mixed salad", price: "10,50 €" },
        { es: "Muslo de pollo rebozado", en: "Battered chicken thigh", price: "10,50 €" },
        { es: "Tortilla con jamón y pan con tomate", en: "Omelette with ham and tomato bread", price: "9,00 €" },
        { es: "Bacon con patatas y huevo", en: "Bacon with fries and egg", price: "9,00 €" },
        { es: "Tortilla de patatas con ensalada y patatas fritas", en: "Spanish omelette with salad and fries", price: "9,00 €" },
        { es: "Pechuga de pollo a la plancha con patatas y huevo", en: "Grilled chicken breast with fries and egg", price: "9,50 €" },
        { es: "Torrezno, huevos y patatas", en: "Torrezno, eggs and fries", price: "10,50 €" },
        { es: "Patatas de luxe con nuggets y hamburguesa", en: "Deluxe fries with nuggets and burger", price: "10,50 €" },
        { es: "Libritos de lomo, patatas y huevo", en: "Stuffed pork loin with fries and egg", price: "10,50 €" },
        { es: "Entrecot a la piedra 250 g", en: "Stone-cooked entrecote 250 g", price: "14,90 €" },
        { es: "Pollo agridulce", en: "Sweet and sour chicken", price: "12,00 €" },
        { es: "Huevos estrellados con jamón", en: "Broken eggs with ham", price: "12,00 €" }
      ]
    },
    {
      categoria: { es: "Tapas", en: "Tapas" },
      items: [
        { es: "Jamón serrano (pan con tomate)", en: "Serrano ham (tomato bread)", price: "10,00 €" },
        { es: "Queso semi (pan con tomate)", en: "Semi-cured cheese (tomato bread)", price: "10,00 €" },
        { es: "Croquetas de pollo (6 und.)", en: "Chicken croquettes (6 pcs)", price: "4,90 €" },
        { es: "Calamares a la romana", en: "Fried squid rings", price: "6,80 €" },
        { es: "Patatas bravas", en: "Patatas bravas", price: "5,50 €" },
        { es: "Torrezno ibérico", en: "Iberian torrezno", price: "7,50 €" },
        { es: "Ensalada variada", en: "Mixed salad", price: "7,30 €" },
        { es: "Ensalada con atún", en: "Tuna salad", price: "7,80 €" },
        { es: "Ensalada de tomate con queso fresco", en: "Tomato salad with fresh cheese", price: "7,80 €" },
        { es: "Tiras de calamar", en: "Squid strips", price: "7,50 €" },
        { es: "Patatas fritas", en: "French fries", price: "5,50 €" },
        { es: "Pincho de tortilla de patatas", en: "Slice of Spanish omelette", price: "4,50 €" },
        { es: "Olivas rellenas", en: "Stuffed olives", price: "3,30 €" },
        { es: "Alitas de pollo (8 und.)", en: "Chicken wings (8 pcs)", price: "6,50 €" },
        { es: "Wantun frito (10 und.)", en: "Fried wonton (10 pcs)", price: "7,80 €" },
        { es: "Arroz con gambas", en: "Prawn rice", price: "8,00 €" },
        { es: "Rollitos de primavera (8 und.)", en: "Spring rolls (8 pcs)", price: "4,50 €" },
        { es: "Empanadillas chinas (12 und.)", en: "Chinese dumplings (12 pcs)", price: "7,50 €" },
        { es: "Ternera con arroz", en: "Beef with rice", price: "9,00 €" },
        { es: "Arroz con pollo y curry (700 g)", en: "Chicken curry rice (700 g)", price: "7,00 €" },
        { es: "Arroz tres delicias (700 g)", en: "Three-delight rice (700 g)", price: "7,00 €" },
        { es: "Tallarines especial tres delicias", en: "Special three-delight noodles", price: "7,00 €" },
        { es: "Espaguetis con tomate", en: "Spaghetti with tomato", price: "6,50 €" },
        { es: "Tallarines con gambas (700 g)", en: "Prawn noodles (700 g)", price: "8,00 €" }
      ]
    },
    {
      categoria: { es: "Bocadillos calientes", en: "Hot sandwiches" },
      nota: { es: "Dos precios = medio / entero", en: "Two prices = half / whole" },
      items: [
        { es: "Lomo", en: "Pork loin", price: "3,00 / 4,50 €" },
        { es: "Bacon", en: "Bacon", price: "3,00 / 4,50 €" },
        { es: "Lomo con queso", en: "Pork loin with cheese", price: "3,50 / 5,10 €" },
        { es: "Bacon con queso", en: "Bacon with cheese", price: "3,50 / 5,10 €" },
        { es: "Lomo con queso y pimiento", en: "Pork loin with cheese and pepper", price: "4,00 / 6,00 €" },
        { es: "Lomo con queso y bacon", en: "Pork loin with cheese and bacon", price: "4,00 / 6,00 €" },
        { es: "Tortilla francesa", en: "Omelette", price: "3,00 / 4,50 €" },
        { es: "Tortilla al gusto (queso, chorizo o jamón dulce)", en: "Custom omelette (cheese, chorizo or ham)", price: "3,50 / 5,10 €" },
        { es: "Tortilla de patatas", en: "Spanish omelette", price: "3,00 / 4,50 €" },
        { es: "Pechuga de pollo", en: "Chicken breast", price: "3,00 / 4,50 €" },
        { es: "Pollo con queso", en: "Chicken with cheese", price: "3,50 / 5,10 €" },
        { es: "Pollo rebozado con lechuga y mahonesa", en: "Battered chicken with lettuce and mayo", price: "4,00 / 6,00 €" },
        { es: "Calamares a la romana", en: "Fried squid rings", price: "5,10 €" },
        { es: "Salchichas del país", en: "Country sausages", price: "5,00 €" },
        { es: "Salchicha con cebolla y alioli", en: "Sausage with onion and aioli", price: "6,00 €" },
        { es: "Bikini", en: "Ham & cheese toastie", price: "3,80 €" },
        { es: "Frankfurt", en: "Frankfurt", price: "4,50 €" },
        { es: "Serranito (jamón serrano, lomo, pimiento verde)", en: "Serranito (serrano ham, pork loin, green pepper)", price: "4,00 / 6,00 €" },
        { es: "Butifarra", en: "Catalan sausage", price: "5,00 €" },
        { es: "Butifarra con cebolla y alioli", en: "Catalan sausage with onion and aioli", price: "6,00 €" },
        { es: "Sobrasada con queso", en: "Sobrasada with cheese", price: "6,00 €" },
        { es: "Canadiense (pollo, lechuga, tomate, queso, mahonesa)", en: "Canadian (chicken, lettuce, tomato, cheese, mayo)", price: "4,00 / 6,00 €" }
      ]
    },
    {
      categoria: { es: "Bocadillos fríos", en: "Cold sandwiches" },
      nota: { es: "Dos precios = medio / entero", en: "Two prices = half / whole" },
      items: [
        { es: "Jamón serrano", en: "Serrano ham", price: "3,00 / 4,50 €" },
        { es: "Jamón serrano con queso", en: "Serrano ham with cheese", price: "3,50 / 5,50 €" },
        { es: "Chorizo", en: "Chorizo", price: "3,00 / 4,50 €" },
        { es: "Longaniza / fuet", en: "Fuet sausage", price: "3,00 / 4,50 €" },
        { es: "Atún", en: "Tuna", price: "3,00 / 4,50 €" },
        { es: "Atún con oliva", en: "Tuna with olives", price: "3,50 / 5,50 €" },
        { es: "Anchoa", en: "Anchovy", price: "4,50 €" },
        { es: "Anchoa con oliva", en: "Anchovy with olives", price: "5,50 €" },
        { es: "Vegetal de atún (lechuga, tomate, atún, mahonesa)", en: "Tuna veggie (lettuce, tomato, tuna, mayo)", price: "3,50 / 5,50 €" },
        { es: "Vegetal de queso (lechuga, tomate, queso, mahonesa)", en: "Cheese veggie (lettuce, tomato, cheese, mayo)", price: "3,50 / 5,50 €" },
        { es: "Queso", en: "Cheese", price: "3,00 / 4,50 €" }
      ]
    },
    {
      categoria: { es: "Hamburguesas", en: "Burgers" },
      items: [
        { es: "Hamburguesa sola", en: "Plain burger", price: "4,00 €" },
        { es: "Hamburguesa con queso", en: "Cheeseburger", price: "4,50 €" },
        { es: "Hamburguesa completa", en: "Full burger", price: "5,40 €" },
        { es: "Hamburguesa de la casa (lechuga, tomate, cebolla, queso, bacon, huevo frito, mahonesa)", en: "House burger (lettuce, tomato, onion, cheese, bacon, fried egg, mayo)", price: "6,50 €" }
      ]
    },
    {
      categoria: { es: "Cervezas y vinos", en: "Beers & wine" },
      items: [
        { es: "Quinto o caña", en: "Small beer", price: "1,90 €" },
        { es: "Mediana Estrella Galicia", en: "Estrella Galicia bottle", price: "2,40 €" },
        { es: "Cerveza 0,0 / tostada sin alcohol", en: "Alcohol-free beer", price: "2,60 €" },
        { es: "Voll Damm, Turia o 1906", en: "Voll Damm, Turia or 1906", price: "2,80 €" },
        { es: "Copa de cerveza", en: "Glass of beer", price: "2,50 €" },
        { es: "Jarra de cerveza 0,5 L", en: "Beer pitcher 0.5 L", price: "4,60 €" },
        { es: "Copa de vino", en: "Glass of wine", price: "2,20 €" },
        { es: "Copa de vino Rioja", en: "Glass of Rioja", price: "2,80 €" },
        { es: "Botella de vino", en: "Bottle of wine", price: "7,00 €" },
        { es: "Tinto de verano", en: "Tinto de verano", price: "2,70 €" }
      ]
    },
    {
      categoria: { es: "Refrescos y agua", en: "Soft drinks & water" },
      items: [
        { es: "Coca-Cola, Sprite, Nestea, Cacaolat (lata)", en: "Coca-Cola, Sprite, Nestea, Cacaolat (can)", price: "2,40 €" },
        { es: "Refrescos botella de cristal 350 ml", en: "Soft drinks glass bottle 350 ml", price: "2,50 €" },
        { es: "Zumo", en: "Juice", price: "2,40 €" },
        { es: "Zumo de naranja natural", en: "Fresh orange juice", price: "3,60 €" },
        { es: "Red Bull (lata)", en: "Red Bull (can)", price: "2,60 €" },
        { es: "Agua mineral 0,5 L", en: "Mineral water 0.5 L", price: "1,60 €" },
        { es: "Agua mineral 1,5 L", en: "Mineral water 1.5 L", price: "2,30 €" },
        { es: "Vichy Catalán", en: "Vichy Catalán", price: "2,40 €" }
      ]
    },
    {
      categoria: { es: "Cafés e infusiones", en: "Coffee & tea" },
      items: [
        { es: "Café solo", en: "Espresso", price: "1,50 €" },
        { es: "Cortado", en: "Cortado", price: "1,60 €" },
        { es: "Café con leche", en: "Coffee with milk", price: "1,70 €" },
        { es: "Café americano", en: "Americano", price: "1,70 €" },
        { es: "Cappuccino", en: "Cappuccino", price: "2,10 €" },
        { es: "Infusiones", en: "Tea & infusions", price: "1,70 €" },
        { es: "Carajillo (coñac o ron)", en: "Carajillo (cognac or rum)", price: "2,20 €" },
        { es: "Carajillo de whisky o Bailey's", en: "Whisky or Bailey's carajillo", price: "2,60 €" },
        { es: "Trifásico (coñac o ron)", en: "Trifásico (cognac or rum)", price: "2,20 €" },
        { es: "Trifásico de whisky", en: "Whisky trifásico", price: "2,60 €" }
      ]
    },
    {
      categoria: { es: "Licores y copas", en: "Spirits" },
      items: [
        { es: "Ponche, coñac, anís, ron", en: "Punch, cognac, anise, rum", price: "2,50 €" },
        { es: "Vodka, whisky", en: "Vodka, whisky", price: "3,00 €" },
        { es: "Torres 5 / Torres 10 / Magno / Bailey's", en: "Torres 5 / Torres 10 / Magno / Bailey's", price: "3,00 €" },
        { es: "Cubata (whisky, vodka, ginebra o ron)", en: "Mixed drink (whisky, vodka, gin or rum)", price: "5,50 / 7,50 €" }
      ]
    }
  ]
};
