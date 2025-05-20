// src/utils/guardarJson.ts

export function descargarJSON(teclas: string[]) {
  const data = {
    fecha: new Date().toISOString(),
    teclas,
  };

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "historial.json";
  a.click();
  URL.revokeObjectURL(url);
}
