import { JSX } from "react";
import Boton from "./Boton";
import sonidoDo from "./assets/sonidos/do.mp3";//si
import sonidoRe from "./assets/sonidos/re.mp3"; //si
import sonidoMi from "./assets/sonidos/mi.mp3"; //si
import sonidoFa from "./assets/sonidos/fa.mp3"; //si
import sonidoSol from "./assets/sonidos/sol.mp3";//si 
import sonidoLa from "./assets/sonidos/la.mp3"; 
import sonidoSi from "./assets/sonidos/si.mp3";//si



function App(): JSX.Element {
  return (
    <>
      <Boton color="black" sonido={sonidoDo} tecla="a" />
      <Boton color="black" sonido={sonidoRe} tecla="s" />
      <Boton color="black" sonido={sonidoMi} tecla="d" />
      <Boton color="black" sonido={sonidoFa} tecla="f" />
      <Boton color="black" sonido={sonidoSol} tecla="g" />
      <Boton color="black" sonido={sonidoLa} tecla="h" />
      <Boton color="black" sonido={sonidoSi} tecla="j" />


    </>
  );
}

export default App;
