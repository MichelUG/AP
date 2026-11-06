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

