function cargar(nua) {
  const clave = nua.trim().replace(/\s+/g, "");
  if (!clave) return;
  if (!(clave in NOMBRES)) {
    $("msg").className = "msg error";
    $("msg").textContent = `No encontramos el NUA ${clave}. Revisa que esté bien escrito o pregúntale a tu profesor.`;
    return;
  }
  califActual = CALIF[clave] || {};
  $("msg").className = "msg";
  $("msg").textContent = "Calificaciones cargadas. Mueve las barras para simular lo que falta.";
  $("who").innerHTML = `<span class="nombre">${esc(NOMBRES[clave])}</span>NUA ${clave}`;
  try { localStorage.setItem("nua", clave); } catch (e) {}
  initSim(); renderControls(); update();
}

$("loginForm").addEventListener("submit", e => { e.preventDefault(); cargar($("nua").value); });
$("resetBtn").addEventListener("click", () => { initSim(); renderControls(); update(); });
$("goalInput").addEventListener("input", update);

initSim(); renderControls(); update();
try { const n = localStorage.getItem("nua"); if (n) { $("nua").value = n; cargar(n); } } catch (e) {}
