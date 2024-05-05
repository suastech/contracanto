import '../style-sheets/Apoyar.css'
//import foto_apoyar from '../imagenes/presentación.jpg'
import patreon from "../imagenes/Patreon_logo.svg.png"
import comunidad from "../imagenes/comunidad.jpg"
function Apoyar({isSpanish}) {

return (
<div id="apoyar" className="apoyar">
    {isSpanish?
    <>
        <h1>Apoyar</h1>
        <p> Atlacholoaya es una comunidad rural ubicada en el municipio de Xochitepec, en el estado de Morelos.
        Somos un proyecto independiente. Si te gusta nuestro trabajo y deseas apoyarnos,
        puedes hacer un donativo deducible de impuestos a través de <i>Patreon</i> o <i>Fundación Comunidad</i> siguiendo estos links:
        <br/>Agradeceremos de corazón tu ayuda.
        </p>
    </>
    :
    <>
        <h1>Support</h1>
        <p> Atlacholoaya is a rural community located in the municipality of Xochitepec, in the state of Morelos.
        If you like our work, and you would like to support us, you can make a donation through the following links.
        <br/>We will sincerely appreciate your support.
        </p>
    </>
    }

    <a href="https://www.paypal.com/donate?token=XlK070JtAw8V5wiBKig6I4LwM5VBCkokhW-jk3cmMHTfiJUyhV__B8is8V-vLR0LN-bGF2wjAc54EpYH" target="_blank" rel="noreferrer noopener">
    <img className="support-image" src={comunidad} alt="patreon" id="comunidad"/>
    </a>

    <a href="https://www.patreon.com/ContraCanto?l=es" target="_blank" rel="noreferrer noopener">
    <img className="support-image" src={patreon} alt="patreon" id="patreon"/>
    </a>

 
 </div>
)

}

export default Apoyar;