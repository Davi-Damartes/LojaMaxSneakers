import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Components/Header/index';
import Container from '../../Components/Container';
import CarouselTenis from '../../Components/CarouselTenis';
import CardTenis from '../../Components/CardTenis/index';
import Footer from '../../Components/Footer';

import tenisLaranja from "../../imagemTenis/TenisLaranja.jpeg";
import tenisBranco from "../../imagemTenis/TenisBranco.jpeg";
import tenisPretoRosa from "../../imagemTenis/TenisPretoRosa.jpeg";
import tenisBrancoBege from "../../imagemTenis/TenisBrancoBege.jpeg";
import tenisBrancoLaranja from "../../imagemTenis/TenisBrancoLaranja.jpeg";
import tenisAllWhite from "../../imagemTenis/TenisAllWhite.jpeg";
import tenisLaranjaBranco from "../../imagemTenis/TenisLaranjaBranco.jpeg";

import ModalAddTenis from '../../Components/ModalAddTenis';
import api from '../../Services/api';


const imagensTenis = 
      [ tenisBranco, tenisLaranja, tenisPretoRosa,
        tenisBrancoBege, tenisBrancoLaranja, tenisPretoRosa,
        tenisAllWhite, tenisLaranjaBranco     
      ]
      

function Home() {
  const [data, setData] = useState([]);

  const pedidoGet = async () => {
    await api.get()
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })

  }

  useEffect(() => {
    pedidoGet();
  }, []);


  return (
    <section>
      <Header />
      <CarouselTenis />
      <ModalAddTenis />
      <Container >
        {
          data.map((dados, index) =>
            <CardTenis
              key={dados.id} 
              imagens={imagensTenis[index % imagensTenis.length]} 
              id={dados.id}
              nome={dados.nome}
              descricao={dados.descricao}
              preco={dados.preco}
            />
          )
        }

      </Container>
      <Footer />
    </section>

  )
}

export default Home;