import '../style-sheets/Apoyar.css'
import foto_apoyar from '../imagenes/presentación2.jpg'
import patreon from "../imagenes/Patreon_logo.svg.png"
import { useState } from 'react'

function Apoyar() {
    const [isApoyar, setIsApoyar] = useState(false)

return (
    <div id="apoyar">    <div className="apoyar">
        <h1>Apoyar</h1>
        <p> Atlacholoaya es una comunidad rural ubicada en el municipio de Xochitepec, en el estado de Morelos.
        Somos un proyecto independiente. Si te gusta nuestro trabajo, puedes ayudarnos a mantenrlo en pie.
        Conoce más sobre cómo puedes apoyarnos. </p>
        <img src={foto_apoyar} alt="fotoapoyar"/>
        <button onClick={() => setIsApoyar(prev => !prev)}
        style={isApoyar ? {transform: 'rotate(180deg)'} : {} }
        ></button>
        {isApoyar && (
            <div className="apoyar">
                <p>
                    Mensaje del director:<br/>
                    Soy Luis Arturo Suaste, pianista y director del coro. En junio de 2022 fundé el Coro de Niñas de Atlacholoaya, una comunidad rural morelense con graves desafíos en el acceso a la educación y la cultura.
                    Además de la formación musical, hemos tejido alianzas con organizaciones que brindan a las participantes talleres de desarrollo humano, atención psicológica y apoyo alimentario.
                    Es para mí un honor trabjar con chicas tan talentosas y que ponen todo su empeño en superarse día con día.
                    <br/><br/>Si deseas apoyarnos, puedes hacer una contribución a través de Pateron haciendo click en el link que está debajo. <br/>Agradeceremos de corazón tu ayuda.
                </p>
                <a href="https://www.patreon.com/ContraCanto?l=es" target="_blank" rel="noreferrer noopener">
                    <img id="patreon" src={patreon} alt="patreon" />
                </a>
            </div>
            )}
    </div>
    </div>

)

}

export default Apoyar;