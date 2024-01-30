import "../style-sheets/Bienvenida.css"
import foto_bienvenida from "../imagenes/Portada 5.jpeg"

function Bienvenida({isSpanish}) {

return (
  <>
{isSpanish?
 <div id="Bienvenida">
   <h1>Nuestro coro</h1>
   <img id="foto-bienvenida" src={foto_bienvenida} alt="foto bienvenida"/>
   <p>Gracias por visitar la página del Coro de Niñas de Atlacholoaya.
    Nuestro coro se creó en junio de 2022. Apenas vamos empezando pero ya tenemos nuestro buen repertorio
    y en los conciertos nos aplauden mucho. Le ponemos mucho empeño al canto para que nos inviten a dar muchos conciertos
    y así llevar nuestra música a todo el mundo.
   <br/>Aquí puedes conocer nuestra música, próximos proyectos y cómo apoyarnos.</p>
 </div>
 :
 <div id="Bienvenida">
   <h1>Our Choir</h1>
   <img id="foto-bienvenida" src={foto_bienvenida} alt="foto bienvenida"/>

   <p>Thank you for visiting the Atlacholoaya Girls Choir page.
   Our choir was created in June 2022. We are just starting but we already have a nice repertoire
   and we get plenty of applause at concerts. We put a lot of effort into singing so that we are invited to give many concerts and take our music to the whole world.
   <br/>Here you can find out about our music, upcoming projects and how to support us.</p>
 </div>
}
</>
) 
}

export default Bienvenida;