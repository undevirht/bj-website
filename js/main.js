// ===== Restaurant BJ — lógica de la web =====
// No hace falta tocar este archivo. El menú se edita en data/menu.js
// Compartido por index.html y carta.html (pinta solo las secciones que existan)

let lang = "es";

function t(obj) {
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.es;
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function renderMenu() {
  const d = MENU_DATA;

  const upd = document.getElementById("menu-updated");
  if (upd) upd.textContent = (lang === "es" ? "Actualizado: " : "Updated: ") + d.updated;

  // Menú del día
  const m = d.menuDelDia;
  setHTML("menu-del-dia", `
    <div class="menu-block">
      <h3>${lang === "es" ? "Primeros" : "Starters"}</h3>
      <ul>${m.primeros.map(p => `<li>${t(p)}</li>`).join("")}</ul>
      <h3>${lang === "es" ? "Segundos" : "Mains"}</h3>
      <ul>${m.segundos.map(p => `<li>${t(p)}</li>`).join("")}</ul>
      <p class="menu-price">${m.price}</p>
      <p class="menu-incluye">${t(m.incluye)}</p>
    </div>`);

  // Bocadillo del día (semana completa, hoy resaltado)
  const b = d.bocadilloDelDia;
  const hoy = (new Date().getDay() + 6) % 7; // 0 = lunes
  setHTML("bocadillo-del-dia", `
    <h3>${t(b.titulo)} — ${b.price}</h3>
    <ul class="semana">
      ${b.dias.map((x, i) => `
        <li class="${i === hoy ? "hoy" : ""}">
          <span class="dia">${t(x.dia)}</span> ${t(x)}
          ${i === hoy ? `<span class="badge">${lang === "es" ? "HOY" : "TODAY"}</span>` : ""}
        </li>`).join("")}
    </ul>`);

  // Menús de oferta + desayunos (desplegables)
  setHTML("ofertas",
    acordeon({ es: "Menús de bocadillo y burger", en: "Sandwich & burger menus" }, renderItems(d.ofertas)) +
    acordeon({ es: "Desayunos", en: "Breakfast" }, renderItems(d.desayunos)));

  // Carta fija (una sección desplegable por categoría)
  setHTML("carta-fija", d.carta.map(cat => acordeon(
    cat.categoria,
    (cat.nota ? `<p class="carta-nota">${t(cat.nota)}</p>` : "") + renderItems(cat.items),
    cat.items.length
  )).join(""));
}

function acordeon(titulo, contenido, num) {
  return `
    <details class="acordeon">
      <summary>${t(titulo)}${num ? ` <span class="num">${num}</span>` : ""}</summary>
      <div class="acordeon-body">${contenido}</div>
    </details>`;
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
  const lb = document.getElementById("lang-toggle");
  if (lb) lb.textContent = lang === "es" ? "EN" : "ES";
  document.documentElement.lang = lang;
  renderMenu();
}

// --- Tema claro / oscuro ---
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const tb = document.getElementById("theme-toggle");
  if (tb) tb.textContent = theme === "dark" ? "☀" : "☾";
  try { localStorage.setItem("bj-theme", theme); } catch (e) {}
}

let theme = "light";
try { theme = localStorage.getItem("bj-theme") || "light"; } catch (e) {}
applyTheme(theme);

const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme(theme);
});

const langBtn = document.getElementById("lang-toggle");
if (langBtn) langBtn.addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  applyLang();
});

applyLang();
