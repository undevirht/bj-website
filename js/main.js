// ===== Restaurant BJ — lógica de la web =====
// No hace falta tocar este archivo. El menú se edita en data/menu.js

let lang = "es";

function t(obj) {
  // Devuelve el texto en el idioma activo
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.es;
}

function renderMenu() {
  const d = MENU_DATA;

  // Fecha de actualización
  document.getElementById("menu-updated").textContent =
    (lang === "es" ? "Actualizado: " : "Updated: ") + d.updated;

  // Menú del día
  const m = d.menuDelDia;
  document.getElementById("menu-del-dia").innerHTML = `
    <div class="menu-block">
      <h3>${lang === "es" ? "Primeros" : "Starters"}</h3>
      <ul>${m.primeros.map(p => `<li>${t(p)}</li>`).join("")}</ul>
      <h3>${lang === "es" ? "Segundos" : "Mains"}</h3>
      <ul>${m.segundos.map(p => `<li>${t(p)}</li>`).join("")}</ul>
      <p class="menu-price">${m.price}</p>
      <p class="menu-incluye">${t(m.incluye)}</p>
    </div>`;

  // Bocadillo / oferta del día
  const b = d.bocadilloDelDia;
  document.getElementById("bocadillo-del-dia").innerHTML = `
    <span>${t(b)} — ${t(b.detalle)}</span>
    <div class="deal-price">${b.price}</div>`;

  // Carta fija
  document.getElementById("carta-fija").innerHTML = d.carta.map(cat => `
    <div class="carta-cat">
      <h3>${t(cat.categoria)}</h3>
      ${cat.items.map(i => `
        <div class="carta-item"><span>${t(i)}</span><span>${i.price}</span></div>
      `).join("")}
    </div>`).join("");
}

function applyLang() {
  // Textos estáticos marcados con data-es / data-en
  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
  document.getElementById("lang-toggle").textContent = lang === "es" ? "EN" : "ES";
  document.documentElement.lang = lang;
  renderMenu();
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  applyLang();
});

applyLang();
