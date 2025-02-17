import React, { JSX, useEffect } from "react";
import sonido from "./assets/sonidos/do.mp3"; // Importamos el archivo de sonido

type BotonProps = {
  color: string;
};

export default function Boton({ color }: BotonProps): JSX.Element {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: color,
    border: "none",
    padding: "10px 20px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  // Función para reproducir el sonido
  const reproducirSonido = () => {
    const audio = new Audio(sonido);
    audio.play();
  };

   // Detectar la tecla "A" y reproducir el sonido
   useEffect(() => {
    const manejarTeclado = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "a") {
        reproducirSonido();
      }
    };

    window.addEventListener("keydown", manejarTeclado);

    return () => {
      window.removeEventListener("keydown", manejarTeclado);
    };
  }, []);
  

  return (
    <button style={buttonStyle} onClick={reproducirSonido}>
      do <br></br>
      (a)
    </button>
  );
}
