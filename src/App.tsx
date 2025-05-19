import { JSX, useState, useEffect } from "react";
import Boton from "./Boton";
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
  const [sonidoActivo, setSonidoActivo] = useState<boolean>(false);

  const teclasCorrectas = [
    "q", "q", "t", "t", "y", "y", "t", "e", "e", "3", "3", "w", "w", "q", "t", "t", "e", "e", "3", "3", "w"
  ];

  useEffect(() => {
    if (gameState.modoJuego && gameState.historialTeclas.length > 0) {
      const ultimaTecla = gameState.historialTeclas[gameState.historialTeclas.length - 1];
      if (teclasCorrectas[gameState.historialTeclas.length - 1] !== ultimaTecla) {
        setGameState((prev) => ({ ...prev, mensaje: "¡Tecla incorrecta! Has perdido." }));
      } else if (gameState.historialTeclas.length === teclasCorrectas.length) {
        setGameState((prev) => ({ ...prev, mensaje: "¡Felicidades! Has ganado." }));
      }
    }
  }, [gameState.historialTeclas, gameState.modoJuego]);

  // Función para tocar sonidos
  const playSound = (sonido: string) => {
    if (!sonidoActivo) {
      setSonidoActivo(true);
      const audio = new Audio(sonido);
      audio.play();
      setTimeout(() => setSonidoActivo(false), audio.duration * 1000);
    }
  };

  // Función para registrar teclas y cambiar estado
  const registrarTecla = (tecla: string) => {
    if (!gameState.modoJuego || gameState.mensaje) return;
    setGameState((prev) => ({
      ...prev,
      historialTeclas: [...prev.historialTeclas, tecla],
    }));
    playSound(tecla);
  };

  // Función para reiniciar el juego
  const reiniciarJuego = () => {
    setGameState({
      historialTeclas: [],
      mensaje: "",
      modoJuego: true,
      theme: gameState.theme,
      timer: 0,
    });
  };

  // Función para cambiar el modo de tocar el piano sin juego
  const activarModoLibre = () => {
    setGameState((prev) => ({
      ...prev,
      modoJuego: false,
      historialTeclas: [],
      mensaje: "",
    }));
  };

  // Función para cambiar el tema
  const toggleTheme = () => {
    setGameState((prev) => ({
      ...prev,
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };

  // Temporizador
  useEffect(() => {
    if (gameState.modoJuego && gameState.mensaje === "") {
      const timer = setInterval(() => {
        setGameState((prev) => ({ ...prev, timer: prev.timer + 1 }));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState.modoJuego, gameState.mensaje]);

  const themeClasses = gameState.theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";
  const buttonThemeClasses = gameState.theme === "dark" ? "bg-blue-500 hover:bg-blue-700" : "bg-blue-300 hover:bg-blue-500";
  const pianoBackground = gameState.theme === "dark" ? "bg-gray-800" : "bg-gray-200";

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen ${themeClasses} relative`}>
      {/* Botón para cambiar tema */}
      <button onClick={toggleTheme} className="absolute top-5 right-5 px-4 py-2 rounded-full text-white bg-gray-800">
        Cambiar Tema
      </button>

      {/* Imagen justo encima del piano */}
      <img src="./public/estrellita.png" alt="Piano" className="w-170 mb-4" />

      <div className={`relative p-4 rounded-lg shadow-lg ${pianoBackground}`}>
        <div className="w-full h-1 bg-red-600 absolute top-0 left-0" />

        {/* Contenedor de teclas blancas */}
        <div className="relative flex">
          <Boton color="white" sonido={sonidoDo} tecla="q" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoRe} tecla="w" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoMi} tecla="e" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoFa} tecla="r" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoSol} tecla="t" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoLa} tecla="y" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoSi} tecla="u" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoDo} tecla="z" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoRe} tecla="x" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoMi} tecla="c" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoFa} tecla="v" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoSol} tecla="b" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoLa} tecla="n" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoSi} tecla="m" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
          <Boton color="white" sonido={sonidoDo} tecla="," extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" onPresionar={registrarTecla} />
        </div>

        {/* Teclas negras */}
        <div className="absolute top-0 left-0 w-full h-32 flex justify-center">
          <div className="relative w-[272px]">
            <Boton color="black" sonido={sonidoDo} tecla="2" extraClasses="w-8 h-32 absolute left-[-296px] top-0 z-10 text-white" onPresionar={registrarTecla} />
            <Boton color="black" sonido={sonidoRe} tecla="3" extraClasses="w-8 h-32 absolute left-[-232px] top-0 z-10 text-white" onPresionar={registrarTecla} />
            <Boton color="black" sonido={sonidoFa} tecla="5" extraClasses="w-8 h-32 absolute left-[-105px] top-0 z-10 text-white" onPresionar={registrarTecla} />
            <Boton color="black" sonido={sonidoSol} tecla="6" extraClasses="w-8 h-32 absolute left-[-41px] top-0 z-10 text-white" onPresionar={registrarTecla} />
            <Boton color="black" sonido={sonidoLa} tecla="7" extraClasses="w-8 h-32 absolute left-[23px] top-0 z-10 text-white" onPresionar={registrarTecla} />
            
            <Boton color="black" sonido={sonidoDo} tecla="s" extraClasses="w-8 h-32 absolute left-[150px] top-0 z-10 text-white" onPresionar={registrarTecla} />
            <Boton color="black" sonido={sonidoRe} tecla="d" extraClasses="w-8 h-32 absolute left-[215px] top-0 z-10 text-white" onPresionar={registrarTecla} />
            <Boton color="black" sonido={sonidoFa} tecla="f" extraClasses="w-8 h-32 absolute left-[343px] top-0 z-10 text-white" onPresionar={registrarTecla} />
            <Boton color="black" sonido={sonidoSol} tecla="h" extraClasses="w-8 h-32 absolute left-[408px] top-0 z-10 text-white" onPresionar={registrarTecla} />
            <Boton color="black" sonido={sonidoLa} tecla="j" extraClasses="w-8 h-32 absolute left-[470px] top-0 z-10 text-white" onPresionar={registrarTecla} />
            <Boton color="black" sonido={sonidoLa} tecla="l" extraClasses="w-8 h-32 absolute left-[600px] top-0 z-10 text-white" onPresionar={registrarTecla} />

          </div>
        </div>
      </div>

      {/* Botones de control */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button onClick={reiniciarJuego} className={`px-4 py-2 ${buttonThemeClasses} text-white rounded-lg`}>
          Reiniciar Juego
        </button>
        <button onClick={activarModoLibre} className={`px-4 py-2 ${buttonThemeClasses} text-white rounded-lg`}>
          Modo Libre
        </button>
        <button onClick={activarModoLibre} className={`px-4 py-2 ${buttonThemeClasses} text-white rounded-lg`}>
          Partituras
        </button>
      </div>

      {/* Mensaje de error o victoria */}
      {gameState.mensaje && (
        <div className="mt-4 p-4 bg-red-600 text-white rounded-lg w-96 text-center">
          <p>{gameState.mensaje}</p>
        </div>
      )}

      {/* Temporizador */}
      <div className="absolute top-5 left-5 p-2 bg-black text-white rounded-lg">
        <p>Tiempo: {gameState.timer}s</p>
      </div>
    </div>
  );
}

export default App;
