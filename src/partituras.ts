// src/partituras.ts

export type Partitura = {
  nombre: string;
  teclas: string[];
};

export const PARTITURAS = [
  {
    nombre: "Estrellita",
    teclas: [
      "b", "b", "n", "b", "z", "m", 
      "b", "b","n", "b", "x", "z",
    "b", "b", "b", "c", "z", "m", "n",
  "v", "v", "c", "z", "x","x"],
    imagen: "/estrellita.png"
  },
  {
    nombre: "Cumpleaños Feliz",
    teclas: ["q", "q", "r", "q", "t", "e"],
    imagen: "/cumple.png"
  },
  // Agrega más partituras...
];
