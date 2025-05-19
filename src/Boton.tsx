import React, { useEffect, useRef, useState } from "react";

type BotonProps = {
  color: string;
  sonido: string;
  tecla: string;
  extraClasses?: string;
  onPresionar?: (tecla: string) => void; // Añadido para manejar el evento de presionar una tecla
};

export default function Boton({ color, sonido, tecla, extraClasses, onPresionar }: BotonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(new Audio(sonido));
  const [teclaPresionada, setTeclaPresionada] = useState(false);
  const tiempoMinimo = 3000; // 3 segundos
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const manejarTeclado = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === tecla.toLowerCase()) {
        if (event.type === "keydown" && !teclaPresionada) {
          setTeclaPresionada(true);
          reproducirSonido();
          if (onPresionar) onPresionar(tecla); // Llamar a onPresionar
        } else if (event.type === "keyup") {
          manejarSoltarTecla();
        }
      }
    };

    window.addEventListener("keydown", manejarTeclado);
    window.addEventListener("keyup", manejarTeclado);

    return () => {
      window.removeEventListener("keydown", manejarTeclado);
      window.removeEventListener("keyup", manejarTeclado);
    };
  }, [tecla, teclaPresionada, onPresionar]);

  const reproducirSonido = () => {
    if (audioRef.current && !teclaPresionada) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();

      // Configuramos un temporizador de 3 segundos
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null; // Se permite cortar el sonido después de este tiempo
      }, tiempoMinimo);
    }
  };

  const manejarSoltarTecla = () => {
    setTeclaPresionada(false);
    if (!timeoutRef.current) {
      detenerSonido();
    } else {
      // Esperamos hasta que termine el mínimo de 3 segundos antes de detener
      setTimeout(detenerSonido, tiempoMinimo);
    }
  };

  const detenerSonido = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`text-lg font-semibold rounded-none transition-all duration-150 ease-in-out active:scale-95 focus:outline-none ${extraClasses}`}
      style={{ backgroundColor: color, color: color === "black" ? "white" : "black" }}
      onMouseDown={() => {
        if (!teclaPresionada) {
          setTeclaPresionada(true);
          reproducirSonido();
          if (onPresionar) onPresionar(tecla); // Llamar a onPresionar al hacer clic
        }
      }}
      onMouseUp={manejarSoltarTecla}
      onMouseLeave={manejarSoltarTecla}
      aria-label={`Botón de sonido para tecla ${tecla}`}
    >
      {tecla.toUpperCase()}
    </button>
  );
}
