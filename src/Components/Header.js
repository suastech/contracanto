import imagen1 from "../imagenes/logobyn.jpg";
import imagen2 from "../imagenes/Portada 8.jpg";

export default function Header({ isSpanish, setIsSpanish}) {

return (
  <header>
    <div className="translate">
      <div className= {isSpanish? "language" : "languageD"}  onClick={()=> setIsSpanish(true)}>Español</div>
      <div className= {isSpanish? "languageD" : "language"}   onClick={()=> setIsSpanish(false)}>English</div>
    </div>
    <img src={imagen1} alt="Imagen 1"/>
    <img src={imagen2} alt="Imagen 2"/>
  </header>
)

}