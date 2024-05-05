import './App.css';
import { useState } from "react";
import Bienvenida from './Components/Bienvenida';
import Musica from './Components/Musica';
import Prensa from './Components/Prensa';
import Apoyar from './Components/Apoyar';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Header from './Components/Header';
import stripe from './imagenes/stripe.jpeg'

function App() {
const [isSpanish, setIsSpanish] = useState(true)
  
return (
  <div className='main'>
    <Header isSpanish={isSpanish} setIsSpanish={setIsSpanish}/>
    <Nav isSpanish={isSpanish}/>
    <Bienvenida isSpanish={isSpanish}/>
    <div className='stripe'> <img src={stripe} alt="stripe"/></div>
    <Musica isSpanish={isSpanish}/>
    <div className='stripe'> <img src={stripe} alt="stripe"/></div>
    <Prensa isSpanish={isSpanish}/>
    <div className='stripe'> <img src={stripe} alt="stripe"/></div>
    <Apoyar isSpanish={isSpanish}/>
    <Footer/>
  </div>
);
}

export default App;

