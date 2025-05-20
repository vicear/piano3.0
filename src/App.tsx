import { JSX, useState, useEffect } from "react";
import Boton from "./Boton";
import { PARTITURAS } from "./partituras";
import { descargarJSON } from "./utils/guardarJson";

// sonidos
import sonidoDo from "./assets/sonidos/do.mp3";
import sonidoRe from "./assets/sonidos/re.mp3";
import sonidoMi from "./assets/sonidos/mi.mp3";
import sonidoFa from "./assets/sonidos/fa.mp3";
import sonidoSol from "./assets/sonidos/sol.mp3";
import sonidoLa from "./assets/sonidos/la.mp3";
import sonidoSi from "./assets/sonidos/si.mp3";

function App(): JSX.Element {
  const [gameState, setGameState] = useState({
    historialTeclas: [] as string[],
    mensaje: "",
    modoJuego: true,
    theme: "dark",
    timer: 0,
  });

  const [sonidoActivo, setSonidoActivo] = useState(false);
  const [partituraIndex, setPartituraIndex] = useState(0);

  const teclasCorrectas = PARTITURAS[partituraIndex].teclas;

  useEffect(() => {
    if (gameState.modoJuego && gameState.historialTeclas.length > 0) {
      const ultimaTecla = gameState.historialTeclas.at(-1);
      const posicion = gameState.historialTeclas.length - 1;

      if (teclasCorrectas[posicion] !== ultimaTecla) {
        setGameState((prev) => ({ ...prev, mensaje: "¡Tecla incorrecta! Has perdido." }));
        descargarJSON(gameState.historialTeclas);
      } else if (gameState.historialTeclas.length === teclasCorrectas.length) {
        setGameState((prev) => ({ ...prev, mensaje: "¡Felicidades! Has ganado." }));
        descargarJSON(gameState.historialTeclas);
      }
    }
  }, [gameState.historialTeclas]);

  const playSound = (sonido: string) => {
    if (!sonidoActivo) {
      setSonidoActivo(true);
      const audio = new Audio(sonido);
      audio.play();
      setTimeout(() => setSonidoActivo(false), audio.duration * 1000);
    }
  };

  const registrarTecla = (tecla: string) => {
    if (!gameState.modoJuego || gameState.mensaje) return;
    setGameState((prev) => ({
      ...prev,
      historialTeclas: [...prev.historialTeclas, tecla],
    }));
    playSound(tecla);
  };

  const reiniciarJuego = () => {
    setGameState((prev) => ({
      historialTeclas: [],
      mensaje: "",
      modoJuego: true,
      theme: prev.theme,
      timer: 0,
    }));
  };

  const activarModoLibre = () => {
    setGameState((prev) => ({
      ...prev,
      modoJuego: false,
      historialTeclas: [],
      mensaje: "",
    }));
  };

  const toggleTheme = () => {
    setGameState((prev) => ({
      ...prev,
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };

  const cambiarPartitura = (index: number) => {
    setPartituraIndex(index);
    reiniciarJuego();
  };

  const themeClasses = gameState.theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";
  const buttonThemeClasses = gameState.theme === "dark" ? "bg-blue-500 hover:bg-blue-700" : "bg-blue-300 hover:bg-blue-500";
  const pianoBackground = gameState.theme === "dark" ? "bg-gray-800" : "bg-gray-200";

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen ${themeClasses} relative`}>
      {/* Tema */}
      <button onClick={toggleTheme} className="absolute top-5 right-5 px-4 py-2 rounded-full text-white bg-gray-800">
        Cambiar Tema
      </button>

      {/* Imagen */}
      <img src="./public/estrellita.png" alt="Piano" className="w-170 mb-4" />

      {/* Partitura */}
      <div className="mb-2">
        <select
          value={partituraIndex}
          onChange={(e) => cambiarPartitura(parseInt(e.target.value))}
          className="p-2 rounded bg-gray-700 text-white"
        >
          {PARTITURAS.map((p, i) => (
            <option key={i} value={i}>
              {p.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Piano */}
      <div className={`relative p-4 rounded-lg shadow-lg ${pianoBackground}`}>
        <div className="w-full h-1 bg-red-600 absolute top-0 left-0" />
        <div className="relative flex">
          {/* Aquí mantén todos tus <Boton /> como los tienes */}
          {/* ... (copiar los botones que ya tienes) */}
        </div>
      </div>

      {/* Controles */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button onClick={reiniciarJuego} className={`px-4 py-2 ${buttonThemeClasses} text-white rounded-lg`}>
          Reiniciar Juego
        </button>
        <button onClick={activarModoLibre} className={`px-4 py-2 ${buttonThemeClasses} text-white rounded-lg`}>
          Modo Libre
        </button>
        <button onClick={() => descargarJSON(gameState.historialTeclas)} className={`px-4 py-2 ${buttonThemeClasses} text-white rounded-lg`}>
          Descargar JSON
        </button>
      </div>

      {/* Mensaje final */}
      {gameState.mensaje && (
        <div className="mt-4 p-4 bg-red-600 text-white rounded-lg w-96 text-center">
          <p>{gameState.mensaje}</p>
        </div>
      )}

      {/* Tiempo */}
      <div className="absolute top-5 left-5 p-2 bg-black text-white rounded-lg">
        <p>Tiempo: {gameState.timer}s</p>
      </div>
    </div>
  );
}

export default App;
