import "../style-sheets/Prensa.css"
import prensa_foto from "../imagenes/prensa2.png"

function Prensa({isSpanish}) {

return (

<div id="prensa">
    {isSpanish?
    <h1><span className="resaltado">Prensa</span> </h1>
    :
    <h1><span className="resaltado">Press</span> </h1>}   
    
    <div className="contenido_prensa">
        <ul className="lista_enlaces_p">
            <li><a href="https://www.lajornadamorelos.mx/opinion/contracanto-el-coro-de-ninas-de-atlacholoaya/" target="_blank" rel="noreferrer" noopener='true'>La Jornada Morelos. ContraCanto, el coro de niñas de Atlacholoaya</a></li>
            <li><a href="https://www.aztecamorelos.com/espectaculos/conoce-proyecto-coro-ninas-cantoras-atlacholoaya" target="_blank" rel="noreferrer" noopener='true'>Tv Azteca Morelos. El Coro de niñas cantoras de Atlacholoaya comparte su talento</a></li>
            <li><a href="https://www.youtube.com/watch?v=yPyg16sdDXM" target="_blank" rel="noreferrer" noopener='true'>Cadena Sur Multimedios. El proyecto "ContraCanto, un coro de niñas que estudian en la Telesecundaria de Atlacholoaya"</a></li>
        </ul>
        <img src={prensa_foto} alt="Imagen de prensa"/>
    </div>
</div>

)
 
}

export default Prensa;