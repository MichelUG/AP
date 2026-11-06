function update() {
  const { total, sinTope, filas, fijoPts, pesoLibre } = compute();
  const meta = clamp(parseFloat($("goalInput").value) || 0);
  $("final").textContent = fmt(total);
  $("marker").style.left = (total * 10) + "%";
  $("goalmark").style.left = (meta * 10) + "%";
  $("goalmark").textContent = "meta " + fmt(meta);

  // Semáforo contra la mínima aprobatoria (7)
  const maximo = Math.min(CONFIG.tope, fijoPts + 10 * pesoLibre);
  let color, titulo, desc;
  if (total >= CONFIG.minimo) { color = "verde"; titulo = "Aprobado"; desc = `Con esta simulación pasas con ${fmt(CONFIG.minimo)} o más.`; }
  else if (maximo >= CONFIG.minimo) { color = "amarillo"; titulo = "En peligro"; desc = `Con esta simulación no llegas a ${fmt(CONFIG.minimo)}, pero todavía puedes alcanzarlo.`; }
  else { color = "rojo"; titulo = `Ya no alcanza el ${fmt(CONFIG.minimo, 0)}`; desc = `Aun con 10 en todo lo que falta, lo máximo posible es ${fmt(maximo)}.`; }
  const ta = califActual ? asisCalc(asisActual || {}) : null;
  if (ta && ta.pct < ASIS_MIN) { color = "rojo"; titulo = "Reprueba por asistencia"; desc = `Tu asistencia es de ${ta.pct.toFixed(1)}% y se requiere ${ASIS_MIN}% para aprobar, sin importar la calificación.`; }
  $("finalBox").className = "final-box " + color;
  $("status").textContent = titulo;
  $("statusDesc").textContent = desc;
  $("luzR").classList.toggle("on", color === "rojo");
  $("luzA").classList.toggle("on", color === "amarillo");
  $("luzV").classList.toggle("on", color === "verde");

  let txt;
  if (pesoLibre <= 0) txt = "Ya no quedan calificaciones por simular.";
  else {
    const nec = (meta - fijoPts) / pesoLibre;
    if (nec <= 0) txt = `Con lo que ya tienes registrado tienes asegurado ${fmt(meta)}, aunque saques 0 en lo que falta.`;
    else if (nec > 10) txt = `Para llegar a ${fmt(meta)} necesitarías más de 10 en todo lo que falta. Lo máximo que puedes alcanzar con 10 en todo es <strong>${fmt(fijoPts + 10 * pesoLibre)}</strong>.`;
    else txt = `Para llegar a <strong>${fmt(meta)}</strong> necesitas sacar en promedio <strong>${fmt(nec)}</strong> en todo lo que falta.`;
  }
  $("need").innerHTML = txt;

  $("breakdown").innerHTML = filas.map(f => `
    <tr><td>${f.r.nombre} <span class="cnt">(${f.n})</span><div class="bar"><span style="width:${f.prom * 10}%"></span></div></td>
    <td class="num">${fmt(f.prom)}</td><td class="num">${f.r.extra ? "+" : ""}${Math.round(f.r.peso * 100)}%</td><td class="num">${fmt(f.aporte, 2)}</td></tr>`).join("");
  $("totalCell").textContent = fmt(total, 2);
  $("topeNote").textContent = sinTope > CONFIG.tope ? `Con los puntos extra sumarías ${fmt(sinTope, 2)}, pero la calificación final tiene tope de ${CONFIG.tope}.` : "";
}
