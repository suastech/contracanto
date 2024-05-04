import '../style-sheets/Apoyar.css'
import foto_apoyar from '../imagenes/coro3.jpeg'
import patreon from "../imagenes/Patreon_logo.svg.png"
import { useState } from 'react'

function Apoyar({isSpanish}) {
    const [isApoyar, setIsApoyar] = useState(false)

return (
    <section className="section-box" id="apoyar">  
    <div className="apoyar">
    {isSpanish?
        <>
        <h1>Apoyar</h1>
        <p> Atlacholoaya es una comunidad rural ubicada en el municipio de Xochitepec, en el estado de Morelos.
        Somos un proyecto independiente. Si te gusta nuestro trabajo, puedes ayudarnos a mantenrlo en pie.
        Conoce más sobre cómo puedes apoyarnos. </p>
        </>
        :
        <>
        <h1>Support</h1>
        <p> Atlacholoaya is a rural community located in the municipality of Xochitepec, in the state of Morelos.
        We are an independent project. If you like our work, you can help us keep it going.
        Learn more about how you can support us.</p>
        </>
    }
        <img src={foto_apoyar} alt="fotoapoyar"/>
        <button onClick={() => setIsApoyar(prev => !prev)}
        style={isApoyar ? {transform: 'rotate(180deg)'} : {} }
        ></button>
        {isApoyar && (
            <div className="apoyar">
                {isSpanish?
                
                <p>
                    <b>Mensaje del director</b>
                    <br/>
                    Soy Luis Arturo Suaste, pianista y director del coro. En junio de 2022 fundé el Coro de Niñas de Atlacholoaya, una comunidad rural morelense con graves desafíos en el acceso a la educación y la cultura.
                    Además de la formación musical, hemos tejido alianzas con organizaciones que brindan a las participantes talleres de desarrollo humano, atención psicológica y apoyo alimentario.
                    Es para mí un honor trabjar con chicas tan talentosas y que ponen todo su empeño en superarse día con día.
                    <br/><br/>Si deseas apoyarnos, puedes hacer una contribución a través de Pateron haciendo click en el link que está debajo. <br/>Agradeceremos de corazón tu ayuda.
                </p>
                :

                <p>
                    <b>Conductor's message</b>
                    <br/>
                    I am Luis Arturo Suaste, pianist and choir director. In June 2022 I founded the Atlacholoaya Girls Choir, located in a rural community with serious challenges in access to education and culture.
                     In addition to musical training, we have forged alliances with organizations that provide participants with human development workshops, psychological care, and nutritional support.
                     It is an honor for me to work with such talented girls who put all their effort into improving themselves day by day.
                     <br/><br/>If you want to support us, you can make a contribution through Pateron by clicking on the link below. <br/>We will sincerely appreciate your support.
                </p>
                }
                <a href="https://www.patreon.com/ContraCanto?l=es" target="_blank" rel="noreferrer noopener">
                    <img id="patreon" src={patreon} alt="patreon" />
                </a>
            </div>
            )}
    </div>
    </section>
)

}

export default Apoyar;