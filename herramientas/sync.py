"""Genera index.html (simulador de alumnos) desde los datos de la hoja de captura.

Uso: python3 herramientas/sync.py datos.json index.html
datos.json = {"config": <documento libro/config>, "calif": {"<nua>": <documento calif/<nua>>, ...}}
"""
import json, os, sys

T = os.path.dirname(os.path.abspath(__file__))
d = json.load(open(sys.argv[1]))
assert "config" in d and "calif" in d and d["config"].get("alumnos"), "faltan config o calif"
js = "".join(open(os.path.join(T, f)).read() for f in ("sim_head.js", "sim_update.js")) + "\n" + open(os.path.join(T, "sim_tail.js")).read()
js = js.replace("__HOJA__", json.dumps(d["config"], ensure_ascii=False, separators=(",", ":"))) \
       .replace("__CALIF__", json.dumps(d["calif"], ensure_ascii=False, separators=(",", ":")))
html = open(os.path.join(T, "sim_template.html")).read().replace("__SCRIPT__", js)
open(sys.argv[2], "w").write(html)
print("ok", sys.argv[2], len(html), "bytes,", len(d["calif"]), "alumnos")
