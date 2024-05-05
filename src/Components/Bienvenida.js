import "../style-sheets/Bienvenida.css"
import foto_bienvenida from "../imagenes/coro5.jpg"

function Bienvenida({isSpanish}) {
  const text1 = isSpanish? "Nuestro coro": "Our Choir"
  const text2 = isSpanish? "Gracias por visitar la página del Coro de Niñas de Atlacholoaya. Nuestro coro se creó en junio de 2022. Apenas vamos empezando pero ya tenemos nuestro buen repertorio y en los conciertos nos aplauden mucho. Le ponemos mucho empeño al canto para que nos inviten a dar muchos conciertos y así llevar nuestra música a todo el mundo."
    : "  Thank you for visiting the Atlacholoaya Girls Choir page. Our choir was created in June 2022. We are just starting but we already have a nice repertoire and we get plenty of applause at concerts. We put a lot of effort into singing so that we are invited to give many concerts and take our music to the whole world."
  const text3 = isSpanish? "Aquí puedes conocer nuestra música, próximos proyectos y cómo apoyarnos.": "Here you can find out about our music, upcoming projects and how to support us.";

return (

 <section className="section-box" id="Bienvenida">
  <img id="imagen-bienvenida" src={foto_bienvenida} alt="foto bienvenida"/>
  <div id="text-container">
    <h1>{text1}</h1>
    <p>{text2}<br/>{text3}</p>
   </div>
 </section>
)
}


export default Bienvenida;