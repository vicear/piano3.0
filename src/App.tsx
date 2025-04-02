import { JSX } from "react";
import Boton from "./Boton";
import sonidoDo from "./assets/sonidos/do.mp3";
import sonidoRe from "./assets/sonidos/re.mp3";
import sonidoMi from "./assets/sonidos/mi.mp3";
import sonidoFa from "./assets/sonidos/fa.mp3";
import sonidoSol from "./assets/sonidos/sol.mp3";
import sonidoLa from "./assets/sonidos/la.mp3";
import sonidoSi from "./assets/sonidos/si.mp3";

function App(): JSX.Element {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      {/* Contenedor del piano con fondo negro y borde rojo */}
      <div className="relative bg-black p-4 rounded-lg shadow-lg">
        <div className="w-full h-1 bg-red-600 absolute top-0 left-0" />

        {/* Contenedor de teclas blancas */}
        <div className="relative flex">
          <Boton color="white" sonido={sonidoDo} tecla="a" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" />
          <Boton color="white" sonido={sonidoRe} tecla="s" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" />
          <Boton color="white" sonido={sonidoMi} tecla="d" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" />
          <Boton color="white" sonido={sonidoFa} tecla="f" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" />
          <Boton color="white" sonido={sonidoSol} tecla="g" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" />
          <Boton color="white" sonido={sonidoLa} tecla="h" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" />
          <Boton color="white" sonido={sonidoSi} tecla="j" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" />
          <Boton color="white" sonido={sonidoDo} tecla="k" extraClasses="w-16 h-48 border border-gray-700 rounded-none text-black flex justify-center items-end pb-10" />
          </div>

        {/* Contenedor de teclas negras (posicionadas encima de las blancas) */}
        <div className="absolute top-0 left-0 w-full h-32 flex justify-center">
          <div className="relative w-[272px]">
            <Boton color="black" sonido={sonidoDo} tecla="w" extraClasses="w-8 h-32 absolute left-[-73px] top-0 z-10 text-white" />
            <Boton color="black" sonido={sonidoRe} tecla="e" extraClasses="w-8 h-32 absolute left-[-8px] top-0 z-10 text-white" />
            {/* Salto de nota porque el Mi no tiene tecla negra */}
            <Boton color="black" sonido={sonidoFa} tecla="t" extraClasses="w-8 h-32 absolute left-[120px] top-0 z-10 text-white" />
            <Boton color="black" sonido={sonidoSol} tecla="y" extraClasses="w-8 h-32 absolute left-[183px] top-0 z-10 text-white" />
            <Boton color="black" sonido={sonidoLa} tecla="u" extraClasses="w-8 h-32 absolute left-[247px] top-0 z-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
