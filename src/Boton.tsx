import React, { JSX, useEffect } from "react";

type BotonProps = {
  color: string;
  sonido: string; // Ahora el botón recibe un sonido como prop
  tecla: string; // También recibe una tecla asignada
};

export default function Boton({ color, sonido, tecla }: BotonProps): JSX.Element {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: color,
    border: "none",
    padding: "50px 20px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "5px", // Espaciado entre botones
  };

  // Función para reproducir el sonido
  const reproducirSonido = () => {
    const audio = new Audio(sonido);
    audio.play();
  };

  // Detectar la tecla asignada y reproducir el sonido
  useEffect(() => {
    const manejarTeclado = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === tecla.toLowerCase()) {
        reproducirSonido();
      }
    };

    window.addEventListener("keydown", manejarTeclado);

    return () => {
      window.removeEventListener("keydown", manejarTeclado);
    };
  }, [tecla]);

  return (
    <button style={buttonStyle} onClick={reproducirSonido}>
      {tecla.toUpperCase()}
    </button>
  );
}
