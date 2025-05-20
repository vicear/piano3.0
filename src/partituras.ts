// src/partituras.ts

export type Partitura = {
  nombre: string;
  teclas: string[];
};

export const PARTITURAS: Partitura[] = [
  {
    nombre: "Estrellita",
    teclas: ["q", "q", "t", "t", "y", "y", "t", "e", "e", "3", "3", "w", "w", "q", "t", "t", "e", "e", "3", "3", "w"],
  },
  {
    nombre: "Canción 2",
    teclas: ["w", "w", "e", "e", "q", "q", "t", "t", "y", "y", "t", "q"],
  },
];
