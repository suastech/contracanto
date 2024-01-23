import '../style-sheets/Footer.css'
import instagram from "../imagenes/instagram logo.png"
import facebook from "../imagenes/logo facebook.png"
import email from "../imagenes/icono email.png"
import logo from "../imagenes/logo contracanto negro.jpg"

function Footer() {

return (
<footer> 
    <img src={logo} alt="Logotipo"/>
    <h6>ContraCanto, 2024&copy; </h6>
    <div className='contacto'>
        <a href="https://www.instagram.com/contracantoatlacho/" target="_blank" rel="noreferrer" noopenernoopener='true'> 
        <img src={instagram} alt="Instagram"/> </a>
        <a href="https://www.facebook.com/ImmigrantChildrensChoir" target="_blank" rel="noreferrer" noopenernoopener='true'> 
        <img src={facebook} alt="Facebook"/> </a>
        <a href="mailto:correo@example.com"> 
        <img src={email} alt="Email"/> </a>
    </div>
</footer>
) 

}

export default Footer;