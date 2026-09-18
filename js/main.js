// ===== Restaurant BJ — lógica de la web =====
// No hace falta tocar este archivo. El menú se edita en data/menu.js

let lang = "es";

function t(obj) {
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

  // Bocadillo del día (semana completa, hoy resaltado)
  const b = d.bocadilloDelDia;
  const hoy = (new Date().getDay() + 6) % 7; // 0 = lunes
  document.getElementById("bocadillo-del-dia").innerHTML = `
    <h3>${t(b.titulo)} — ${b.price}</h3>
    <ul class="semana">
      ${b.dias.map((x, i) => `
        <li class="${i === hoy ? "hoy" : ""}">
          <span class="dia">${t(x.dia)}</span> ${t(x)}
          ${i === hoy ? `<span class="badge">${lang === "es" ? "HOY" : "TODAY"}</span>` : ""}
        </li>`).join("")}
    </ul>`;

  // Menús de oferta + desayunos
  document.getElementById("ofertas").innerHTML = renderItems(d.ofertas);
  document.getElementById("desayunos").innerHTML = renderItems(d.desayunos);

  // Carta fija
  document.getElementById("carta-fija").innerHTML = d.carta.map(cat => `
    <div class="carta-cat">
      <h3>${t(cat.categoria)}</h3>
      ${cat.nota ? `<p class="carta-nota">${t(cat.nota)}</p>` : ""}
      ${renderItems(cat.items)}
    </div>`).join("");
}

function renderItems(items) {
  return items.map(i => `
    <div class="carta-item"><span>${t(i)}</span><span class="precio">${i.price}</span></div>
  `).join("");
}

function applyLang() {
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
