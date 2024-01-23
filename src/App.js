import './App.css';
import Header from './Components/Header';
import Bienvenida from './Components/Bienvenida';
import Musica from './Components/Musica';
import Prensa from './Components/Prensa';
import Apoyar from './Components/Apoyar';
import Footer from './Components/Footer';

function App() {

return (
  <div className='main'>
    <Header/>
    <Bienvenida/>
    <Musica/>
    <Prensa/>
    <Apoyar/>
    <Footer/>
  </div>

);
}

export default App;

