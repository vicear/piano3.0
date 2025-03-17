import React, { useEffect, useRef } from "react";

type BotonProps = {
  color: string;
  sonido: string;
  tecla: string;
  extraClasses?: string;
};

export default function Boton({ color, sonido, tecla, extraClasses }: BotonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const reproducirSonido = () => {
    const audio = new Audio(sonido); // 🔹 Crea una nueva instancia en cada llamada
    audio.currentTime = 0;
    audio.play();

    if (buttonRef.current) {
      buttonRef.current.classList.add("active");
      setTimeout(() => buttonRef.current?.classList.remove("active"), 150);
    }
  };

  useEffect(() => {
    const manejarTeclado = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === tecla.toLowerCase()) {
        reproducirSonido();
      }
    };

    window.addEventListener("keydown", manejarTeclado);
    return () => window.removeEventListener("keydown", manejarTeclado);
  }, [tecla]);

  return (
    <button
      ref={buttonRef}
      className={`text-black text-lg font-semibold rounded-md transition-all duration-150 ease-in-out active:scale-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ${extraClasses}`}
      style={{ backgroundColor: color }}
      onClick={reproducirSonido}
      aria-label={`Botón de sonido para tecla ${tecla}`}
      tabIndex={0}
    >
      {tecla.toUpperCase()}
    </button>
  );
}
