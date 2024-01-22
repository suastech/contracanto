import imagen1 from "../imagenes/logobyn.jpg";
import imagen2 from "../imagenes/Portada 7.jpeg";
import "../style-sheets/Header.css"

function Header() {

return(
    <>
      <header>
        <img src={imagen1} alt="Imagen 1"/>
        <img src={imagen2} alt="Imagen 2"/>
      </header>

      <nav>
        <ul >
            <li><a href="#Bienvenida">Coro</a></li>
            <li><a href="#musica">Música</a></li>
            <li><a href="#prensa">Prensa</a></li>
            <li><a href="#apoyar">Apoyar</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header;