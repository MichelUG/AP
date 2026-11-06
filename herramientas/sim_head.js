/* ===== TEMA VISUAL ===== */
const TEMA_ICONOS = {
  ap: [
    // Dron cuadricóptero
    `<svg viewBox="0 0 64 64" role="img" aria-label="Dron"><title>Dron</title>
      <g stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none" style="color:var(--accent)">
        <line x1="20" y1="24" x2="10" y2="16"/><line x1="44" y1="24" x2="54" y2="16"/>
        <line x1="20" y1="40" x2="10" y2="48"/><line x1="44" y1="40" x2="54" y2="48"/>
      </g>
      <g fill="none" stroke="var(--gold)" stroke-width="2"><ellipse cx="10" cy="16" rx="9" ry="3"/><ellipse cx="54" cy="16" rx="9" ry="3"/><ellipse cx="10" cy="48" rx="9" ry="3"/><ellipse cx="54" cy="48" rx="9" ry="3"/></g>
      <rect x="20" y="22" width="24" height="20" rx="6" fill="var(--accent)"/>
      <circle cx="32" cy="32" r="5" fill="var(--gold)"/><circle cx="32" cy="32" r="2.2" fill="var(--surface)"/>
      <path d="M26 46 L32 56 L38 46" fill="none" stroke="var(--gold)" stroke-width="1.6" stroke-dasharray="2 2"/>
    </svg>`,
    // Satélite
    `<svg viewBox="0 0 64 64" role="img" aria-label="Satélite"><title>Satélite</title>
      <g transform="rotate(-30 32 32)">
        <rect x="4" y="25" width="18" height="14" rx="1.5" fill="var(--gold)"/>
        <rect x="42" y="25" width="18" height="14" rx="1.5" fill="var(--gold)"/>
        <g stroke="var(--surface)" stroke-width="1.2"><line x1="10" y1="25" x2="10" y2="39"/><line x1="16" y1="25" x2="16" y2="39"/><line x1="48" y1="25" x2="48" y2="39"/><line x1="54" y1="25" x2="54" y2="39"/><line x1="4" y1="32" x2="22" y2="32"/><line x1="42" y1="32" x2="60" y2="32"/></g>
        <line x1="22" y1="32" x2="42" y2="32" stroke="var(--accent)" stroke-width="2.4"/>
        <rect x="25" y="23" width="14" height="18" rx="3" fill="var(--accent)"/>
        <path d="M32 41 v6" stroke="var(--accent)" stroke-width="2.4"/><path d="M26 50 a6 4 0 0 0 12 0 z" fill="var(--accent)"/>
      </g>
      <g fill="none" stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round" opacity=".8"><path d="M48 52 a8 8 0 0 0 8 -8"/><path d="M47 58 a14 14 0 0 0 14 -14"/></g>
    </svg>`
  ],
  pcb: [
    // Mazorca de maíz
    `<svg viewBox="0 0 64 64" role="img" aria-label="Mazorca de maíz"><title>Maíz</title>
      <path d="M30 60 C22 50 18 36 22 18 C26 28 28 40 31 52 Z" fill="#5d9b3a"/>
      <path d="M34 60 C42 50 46 36 42 18 C38 28 36 40 33 52 Z" fill="#4a8530"/>
      <ellipse cx="32" cy="28" rx="9" ry="22" fill="#f2b705"/>
      <g fill="#ffd34d">${Array.from({ length: 8 }, (_, r) => Array.from({ length: 3 }, (_, c) => `<ellipse cx="${27 + c * 5}" cy="${11 + r * 4.6}" rx="2" ry="1.9"/>`).join("")).join("")}</g>
      <path d="M32 6 C31 3 29 2 27 2 M32 6 C33 3 35 2 37 2" stroke="#b5862a" stroke-width="1.4" fill="none"/>
      <path d="M26 58 C28 50 28 44 27 36 C31 44 32 52 32 60 Z" fill="#6fb046"/>
    </svg>`,
    // Vaina de frijol
    `<svg viewBox="0 0 64 64" role="img" aria-label="Vaina de frijol"><title>Frijol</title>
      <path d="M10 20 C24 14 44 22 54 44 C56 49 52 52 48 49 C38 34 24 28 12 27 C7 27 6 22 10 20 Z" fill="#79b04a"/>
      <path d="M12 23 C24 20 40 26 50 44" stroke="#4f8a2c" stroke-width="1.4" fill="none"/>
      <g fill="#7a2f1b"><ellipse cx="20" cy="25" rx="4.5" ry="3.2" transform="rotate(10 20 25)"/><ellipse cx="30" cy="28" rx="4.5" ry="3.2" transform="rotate(25 30 28)"/><ellipse cx="39" cy="34" rx="4.5" ry="3.2" transform="rotate(40 39 34)"/><ellipse cx="46" cy="42" rx="4.2" ry="3" transform="rotate(55 46 42)"/></g>
      <g fill="#b8583a" opacity=".7"><ellipse cx="19" cy="24" rx="1.5" ry="1"/><ellipse cx="29" cy="27" rx="1.5" ry="1"/><ellipse cx="38" cy="33" rx="1.5" ry="1"/><ellipse cx="45" cy="41" rx="1.4" ry="1"/></g>
      <path d="M10 20 C7 17 6 13 8 10" stroke="#4f8a2c" stroke-width="2" fill="none"/>
      <ellipse cx="14" cy="50" rx="6" ry="4.2" fill="#7a2f1b" transform="rotate(-20 14 50)"/><ellipse cx="13" cy="49" rx="1.8" ry="1.1" fill="#c0603f" opacity=".7"/>
    </svg>`,
    // Girasol
    `<svg viewBox="0 0 64 64" role="img" aria-label="Girasol"><title>Girasol</title>
      <path d="M32 42 C31 50 32 56 32 63" stroke="#3f7d2a" stroke-width="3" fill="none"/>
      <path d="M32 54 C40 48 48 50 51 53 C45 58 37 58 32 54 Z" fill="#4f9a35"/>
      <g fill="#f6b80c">${Array.from({ length: 16 }, (_, i) => `<ellipse cx="32" cy="7" rx="4.2" ry="9" transform="rotate(${i * 22.5} 32 24)"/>`).join("")}</g>
      <g fill="#ffd02e">${Array.from({ length: 16 }, (_, i) => `<ellipse cx="32" cy="10" rx="3" ry="6" transform="rotate(${i * 22.5 + 11} 32 24)"/>`).join("")}</g>
      <circle cx="32" cy="24" r="9.5" fill="#5a3415"/>
      <g fill="#8a5a2b">${Array.from({ length: 14 }, (_, i) => { const a = i * 2.4, r = 1.4 * Math.sqrt(i + 1); return `<circle cx="${(32 + r * Math.cos(a)).toFixed(1)}" cy="${(24 + r * Math.sin(a)).toFixed(1)}" r="1"/>`; }).join("")}</g>
    </svg>`
  ],
  pco: [
    // Cempasúchil
    `<svg viewBox="0 0 64 64" role="img" aria-label="Flor de cempasúchil"><title>Cempasúchil</title>
      <path d="M32 46 C30 52 30 56 31 62" stroke="#3f7d3a" stroke-width="2.6" fill="none"/>
      <path d="M31 55 C24 52 20 54 18 57 C24 59 28 58 31 55 Z" fill="#4f9a45"/>
      <g fill="#f08a00">${Array.from({ length: 14 }, (_, i) => `<ellipse cx="32" cy="10" rx="5" ry="10" transform="rotate(${i * 360 / 14} 32 28)"/>`).join("")}</g>
      <g fill="#f9a51a">${Array.from({ length: 12 }, (_, i) => `<ellipse cx="32" cy="15" rx="4.2" ry="8" transform="rotate(${i * 30 + 15} 32 28)"/>`).join("")}</g>
      <g fill="#ffc533">${Array.from({ length: 10 }, (_, i) => `<ellipse cx="32" cy="20" rx="3.4" ry="5.5" transform="rotate(${i * 36} 32 28)"/>`).join("")}</g>
      <circle cx="32" cy="28" r="4" fill="#e07000"/>
    </svg>`,
    // Rosa
    `<svg viewBox="0 0 64 64" role="img" aria-label="Rosa"><title>Rosa</title>
      <path d="M32 36 C33 44 31 52 32 62" stroke="#2f6b34" stroke-width="2.6" fill="none"/>
      <path d="M32 48 C40 42 47 44 50 47 C44 52 37 52 32 48 Z" fill="#3f8a44"/>
      <path d="M32 54 C25 50 18 52 15 55 C21 59 28 58 32 54 Z" fill="#3f8a44"/>
      <path d="M14 20 C14 34 24 40 32 40 C40 40 50 34 50 20 C44 26 38 26 32 22 C26 26 20 26 14 20 Z" fill="#a3123f"/>
      <path d="M18 14 C20 28 28 32 32 32 C36 32 44 28 46 14 C40 20 36 20 32 16 C28 20 24 20 18 14 Z" fill="#c81d52"/>
      <path d="M24 12 C24 22 29 26 32 26 C35 26 40 22 40 12 C36 15 34 15 32 12 C30 15 28 15 24 12 Z" fill="#e0306a"/>
      <path d="M28 14 C29 19 31 20 32 20 C34 20 36 18 36 14 C34 16 30 16 28 14 Z" fill="#f2577f"/>
    </svg>`
  ]
};
function aplicarTema(materia, tema) {
  const t = tema || (/ornamental/i.test(materia || "") ? "pco" : /b[aá]sic/i.test(materia || "") ? "pcb" : "ap");
  document.documentElement.dataset.tema = t;
  const box = document.getElementById("temaIconos");
  if (box && TEMA_ICONOS[t]) box.innerHTML = TEMA_ICONOS[t].join("");
}

/* ===== DATOS (se generan desde la hoja de captura; no editar a mano) ===== */
const HOJA = __HOJA__;
const CALIF = __CALIF__;
const ASIS = __ASIS__;
/* ======================================================================= */
const PREFIJOS = { examenes: "Examen", practicas: "Práctica", tareas: "Tarea", proyecto: "Proyecto final", exposicion: "Exposición", extra: "Actividad extra" };
const RUBROS_BASE = HOJA.rubros && HOJA.rubros.length ? HOJA.rubros : [
  { id: "examenes", nombre: "Exámenes" }, { id: "practicas", nombre: "Prácticas" }, { id: "tareas", nombre: "Tareas" },
  { id: "proyecto", nombre: "Proyecto final" }, { id: "extra", nombre: "Puntos extra", extra: true }
];
const CONFIG = {
  rubros: RUBROS_BASE.map(r => ({
    id: r.id, nombre: r.nombre, prefijo: r.prefijo || PREFIJOS[r.id] || r.nombre,
    editable: r.id !== "proyecto", extra: !!(r.extra || r.id === "extra"), peso: HOJA.pesos[r.id] || 0
  })),
  valorInicialSimulado: 8.0,
  tope: HOJA.tope,
  minimo: HOJA.minimo
};
document.getElementById("chips").innerHTML = CONFIG.rubros.map(r => `<span class="chip">${r.nombre} ${r.extra ? "+" : ""}${Math.round(r.peso * 100)}%</span>`).join("");
aplicarTema(HOJA.materia, HOJA.tema);
const NOMBRES = Object.fromEntries(HOJA.alumnos.map(a => [a.nua, a.nombre]));

let fijas = {};  // rubro -> [{nombre, v}] registradas
let pend = {};   // rubro -> [{nombre, v}] simuladas
let califActual = null;
let asisActual = null; // asistencia del alumno cargado (null = sin registro) // calificaciones del alumno cargado (null = ejemplo)

const $ = id => document.getElementById(id);
const clamp = v => Math.min(10, Math.max(0, v));
const fmt = (v, d = 1) => (Math.round(v * 10 ** d) / 10 ** d).toFixed(d);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function ejemplo() {
  const g = {};
  HOJA.columnas.forEach((c, i) => { if (c.rubro !== "proyecto") g[c.id] = [8, 9, 10, 7, 9.5][i % 5]; });
  return g;
}

const ASIS_MIN = HOJA.asistenciaMin ?? 80;
function asisCalc(m) {
  const ses = HOJA.sesiones || [];
  if (!m || !ses.length) return null;
  let a = 0, r = 0, f = 0;
  ses.forEach(s => { const v = m[s.id]; if (v === "A") a++; else if (v === "R") r++; else if (v === "F") f++; });
  const total = a + r + f; if (!total) return null;
  const faltas = f + Math.floor(r / 3);
  return { a, r, f, faltas, total, pct: (100 * (total - faltas)) / total };
}
function renderAsis() {
  const card = $("asisCard"), ses = HOJA.sesiones || [];
  if (!ses.length) { card.hidden = true; return; }
  card.hidden = false;
  $("asisRule").textContent = `Se requiere ${ASIS_MIN}% de asistencia para aprobar. Los retardos cuentan como asistencia; cada 3 retardos se convierten en 1 falta.`;
  const m = califActual ? (asisActual || {}) : null;
  const t = m ? asisCalc(m) : null;
  const p = $("asisPct");
  if (!califActual) { p.textContent = "—"; p.className = "asis-pct"; $("asisCounts").innerHTML = "<span>Escribe tu NUA para ver tu asistencia.</span>"; $("asisStrip").innerHTML = ""; return; }
  p.textContent = t ? t.pct.toFixed(1) + "%" : "—";
  p.className = "asis-pct" + (t && t.pct < ASIS_MIN ? " bajo" : "");
  if (t) {
    const resto = 3 - (t.r % 3);
    $("asisCounts").innerHTML = `<span>✓ ${t.a} ${t.a === 1 ? "asistencia" : "asistencias"}</span><span>! ${t.r} ${t.r === 1 ? "retardo" : "retardos"}</span><span>✗ ${t.f} ${t.f === 1 ? "falta" : "faltas"}</span><span>Faltas totales: ${t.faltas}</span>` +
      (t.r % 3 ? `<span>${resto === 1 ? "1 retardo más" : resto + " retardos más"} = 1 falta</span>` : "") +
      (t.pct < ASIS_MIN ? `<span class="alerta">Debajo del ${ASIS_MIN}% requerido</span>` : "");
  } else $("asisCounts").innerHTML = "<span>Todavía no hay asistencia registrada.</span>";
  const sym = { A: "✓", R: "!", F: "✗" }, nom = { A: "asistencia", R: "retardo", F: "falta" };
  $("asisStrip").innerHTML = ses.map(s => { const v = m[s.id] || ""; const [y, mo, d] = s.fecha.split("-");
    return `<div class="asis-d" title="${d}/${mo}/${y}: ${nom[v] || "sin registro"}"><i class="${v}">${sym[v] || ""}</i><small>${d}/${mo}</small></div>`; }).join("");
}

function initSim() {
  const g = califActual || ejemplo();
  fijas = {}; pend = {};
  CONFIG.rubros.forEach(r => {
    const cols = HOJA.columnas.filter(c => c.rubro === r.id);
    fijas[r.id] = []; pend[r.id] = [];
    cols.forEach(c => {
      if (typeof g[c.id] === "number") fijas[r.id].push({ nombre: c.nombre, v: g[c.id] });
      else pend[r.id].push({ nombre: c.nombre, v: CONFIG.valorInicialSimulado });
    });
    const previstas = HOJA.previstas[r.id] || 0;
    for (let k = cols.length + 1; k <= previstas; k++) {
      pend[r.id].push({ nombre: r.id === "proyecto" ? "Proyecto final" : r.prefijo + " " + k, v: CONFIG.valorInicialSimulado });
    }
  });
}

function renderControls() {
  const box = $("controls");
  box.innerHTML = "";
  CONFIG.rubros.forEach(r => {
    const fs = document.createElement("fieldset");
    fs.innerHTML = `<legend>${r.nombre} · ${r.extra ? "+" : ""}${Math.round(r.peso * 100)}%${r.extra ? " adicional" : ""}</legend>`;
    fijas[r.id].forEach(it => {
      const row = document.createElement("div");
      row.className = "row fixed";
      row.innerHTML = `<span>${esc(it.nombre)}</span><span class="lock">🔒 Registrada</span><span class="fixedval">${fmt(it.v)}</span>`;
      fs.appendChild(row);
    });
    pend[r.id].forEach((it, j) => {
      const nombre = esc(it.nombre), sid = r.id + "-" + j;
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `<label for="r-${sid}">${nombre}</label>
        <input type="range" id="r-${sid}" min="0" max="10" step="0.1" value="${it.v}" aria-label="${nombre}">
        <input type="number" id="n-${sid}" min="0" max="10" step="0.1" value="${fmt(it.v)}" aria-label="${nombre} (número)">`;
      const range = row.querySelector('input[type="range"]'), num = row.querySelector('input[type="number"]');
      range.addEventListener("input", () => { it.v = +range.value; num.value = fmt(it.v); update(); });
      num.addEventListener("input", () => {
        if (num.value === "" || isNaN(+num.value)) return;
        it.v = clamp(+num.value); range.value = it.v; update();
      });
      num.addEventListener("blur", () => { num.value = fmt(it.v); });
      fs.appendChild(row);
    });
    if (r.editable) {
      const act = document.createElement("div");
      act.className = "adds";
      act.innerHTML = `<button type="button" class="mini" data-a="add">+ Agregar ${r.prefijo.toLowerCase()}</button>` +
        (pend[r.id].length ? `<button type="button" class="mini" data-a="del">− Quitar la última</button>` : "");
      act.querySelector('[data-a="add"]').addEventListener("click", () => {
        if (pend[r.id].length < 12) {
          const n = fijas[r.id].length + pend[r.id].length + 1;
          pend[r.id].push({ nombre: r.prefijo + " " + n, v: CONFIG.valorInicialSimulado });
          renderControls(); update();
        }
      });
      const del = act.querySelector('[data-a="del"]');
      if (del) del.addEventListener("click", () => { pend[r.id].pop(); renderControls(); update(); });
      fs.appendChild(act);
    }
    box.appendChild(fs);
  });
}

function compute() {
  let base = 0, fijoPts = 0, pesoLibre = 0;
  const filas = CONFIG.rubros.map(r => {
    const f = fijas[r.id].map(x => x.v), p = pend[r.id].map(x => x.v);
    const n = f.length + p.length;
    if (n === 0) return { r, prom: 0, aporte: 0, n };
    const sf = f.reduce((a, b) => a + b, 0), sp = p.reduce((a, b) => a + b, 0);
    const prom = (sf + sp) / n, w = r.peso / n;
    fijoPts += sf * w; pesoLibre += p.length * w; base += prom * r.peso;
    return { r, prom, aporte: prom * r.peso, n };
  });
  return { total: Math.min(CONFIG.tope, base), sinTope: base, filas, fijoPts, pesoLibre };
}

