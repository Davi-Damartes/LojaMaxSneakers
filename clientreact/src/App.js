import { useEffect, useState } from 'react';
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
import { baseUrl } from './Contexts/Url';

const tenis = [{tenisBranco}, {tenisLaranja}, {tenisPretoRosa}]

function App() {

  const [data, setData] = useState([]);

  const pedidoGet=async()=>{
    await axios.get(baseUrl)
    .then(response =>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })

  }

  useEffect(()=> {
        pedidoGet();
  })



  return (
    <div className="App">
      <Header />
      <CarouselTenis />
      <Container >
        {
          data.map((dados) =>
             <CardTenis imagens={tenisLaranja} 
                        titulo={dados.nome} 
                        descricao={dados.descricao}
                        preco={dados.preco}/>)
        }

      </Container>
      <Footer />
    </div>
  );
}

export default App;
