import './App.css';
import { useState } from "react";
import imagen1 from "./imagenes/logobyn.jpg";
import imagen2 from "./imagenes/Portada 7.jpeg";
import Bienvenida from './Components/Bienvenida';
import Musica from './Components/Musica';
import Prensa from './Components/Prensa';
import Apoyar from './Components/Apoyar';
import Footer from './Components/Footer';

function App() {

  const [isSpanish, setIsSpanish] = useState(true)

  const idioma = (lang) => {
    setIsSpanish(lang)
  }
  
  
return (
  <div className='main'>
     <header>
        <div className="translate">
          <div className= {isSpanish?"idioma":"idiomaD"}
          onClick={()=> idioma(true)} >Español</div>
          <div className={isSpanish?"idiomaD":"idioma"} onClick={()=> idioma(false)}>English</div>
        </div>

        <img src={imagen1} alt="Imagen 1"/>
        <img src={imagen2} alt="Imagen 2"/>
      </header>
      <nav>
        {isSpanish?
        <ul >
            <li><a href="#Bienvenida">Coro</a></li>
            <li><a href="#musica">Música</a></li>
            <li><a href="#prensa">Prensa</a></li>
            <li><a href="#apoyar">Apoyar</a></li>
          </ul>
        :
          <ul >
          <li><a href="#Bienvenida">Choir</a></li>
          <li><a href="#musica">Music</a></li>
          <li><a href="#prensa">Press</a></li>
          <li><a href="#apoyar">Support</a></li>
          </ul>}
      </nav>
    <Bienvenida isSpanish={isSpanish}/>
    <Musica isSpanish={isSpanish}/>
    <Prensa isSpanish={isSpanish}/>
    <Apoyar isSpanish={isSpanish}/>
    <Footer/>
  </div>

);
}

export default App;

