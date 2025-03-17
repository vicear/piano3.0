import { JSX } from "react";
import Boton from "./Boton";
import sonidoDo from "./assets/sonidos/do.mp3";
import sonidoRe from "./assets/sonidos/re.mp3";
import sonidoMi from "./assets/sonidos/mi.mp3";
import sonidoFa from "./assets/sonidos/fa.mp3";
import sonidoSol from "./assets/sonidos/sol.mp3";
import sonidoLa from "./assets/sonidos/la.mp3";
import sonidoSi from "./assets/sonidos/si.mp3";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900">
      {/* Contenedor del piano */}
      <div className="relative flex mt-30">
        {/* Contenedor de teclas blancas */}
        <div className="flex space-x-1">
          <Boton color="white" sonido={sonidoDo} tecla="a" extraClasses="w-16 h-48 border border-gray-500" />
          <Boton color="white" sonido={sonidoRe} tecla="s" extraClasses="w-16 h-48 border border-gray-500" />
          <Boton color="white" sonido={sonidoMi} tecla="d" extraClasses="w-16 h-48 border border-gray-500" />
          <Boton color="white" sonido={sonidoFa} tecla="f" extraClasses="w-16 h-48 border border-gray-500" />
          <Boton color="white" sonido={sonidoSol} tecla="g" extraClasses="w-16 h-48 border border-gray-500" />
          <Boton color="white" sonido={sonidoLa} tecla="h" extraClasses="w-16 h-48 border border-gray-500" />
          <Boton color="white" sonido={sonidoSi} tecla="j" extraClasses="w-16 h-48 border border-gray-500" />
          <Boton color="white" sonido={sonidoDo} tecla="k" extraClasses="w-16 h-48 border border-gray-500" />

        </div>

        {/* Contenedor de teclas negras */}
        <div className="absolute top-0 flex space-x-4">
          <Boton color="black" sonido={sonidoDo} tecla="w" extraClasses="w-12 h-32 absolute left-10 -top-2" />
          <Boton color="black" sonido={sonidoRe} tecla="e" extraClasses="w-12 h-32 absolute left-28 -top-2" />
          {/* Salto de nota porque el Mi no tiene tecla negra */}
          <Boton color="black" sonido={sonidoFa} tecla="t" extraClasses="w-12 h-32 absolute left-60 -top-2" />
          <Boton color="black" sonido={sonidoSol} tecla="y" extraClasses="w-12 h-32 absolute left-80 -top-2" />
          <Boton color="black" sonido={sonidoLa} tecla="u" extraClasses="w-12 h-32 absolute left-100 -top-2" />
        </div>
      </div>
    </div>
  );
}

export default App;
