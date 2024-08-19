import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import Container from './Components/Container';
import CarouselTenis from './Components/CarouselTenis';
import CardTenis from './Components/CardTenis/index';

import tenisBranco from "./imagemTenis/TenisBranco.jpeg";
import tenisLaranja from "./imagemTenis/TenisLaranja.jpeg";
import tenisPretoRosa from "./imagemTenis/TenisPretoRosa.jpeg";
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <CarouselTenis />
      <Container >
         { <CardTenis imagens={tenisPretoRosa} /> }

         { <CardTenis imagens={tenisLaranja}/> }

         { <CardTenis imagens={tenisBranco} /> }

         { <CardTenis imagens={tenisLaranja} /> }

         { <CardTenis imagens={tenisPretoRosa} /> }

         { <CardTenis imagens={tenisBranco} /> }

         { <CardTenis imagens={tenisLaranja} /> }

         { <CardTenis imagens={tenisPretoRosa} /> }

      </Container>

      <Footer />
    </div>
  );
}

export default App;
