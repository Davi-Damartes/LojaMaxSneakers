import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Home.module.css"
import axios from 'axios';
import Header from '../../Components/Header/index';
import Container from '../../Components/Container';
import CarouselTenis from '../../Components/CarouselTenis';
import CardTenis from '../../Components/CardTenis/index';
import Footer from '../../Components/Footer';
import { baseUrl } from '../../Contexts/Url';

import tenisLaranja from "../../imagemTenis/TenisLaranja.jpeg";
import tenisBranco from "../../imagemTenis/TenisBranco.jpeg";
import tenisPretoRosa from "../../imagemTenis/TenisPretoRosa.jpeg";
import tenisBrancoBege from "../../imagemTenis/TenisBrancoBege.jpeg";
import tenisBrancoLaranja from "../../imagemTenis/TenisBrancoLaranja.jpeg";
import tenisAllWhite from "../../imagemTenis/TenisAllWhite.jpeg";
import tenisLaranjaBranco from "../../imagemTenis/TenisLaranjaBranco.jpeg";

import ModalAddTenis from '../../Components/ModalAddTenis';


const imagensTenis = 
      [ tenisBranco, tenisLaranja, tenisPretoRosa,
        tenisBrancoBege, tenisBrancoLaranja, tenisPretoRosa,
        tenisAllWhite, tenisLaranjaBranco     
      ]
      

function Home() {
  const [data, setData] = useState([]);

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })

  }

  useEffect(() => {
    pedidoGet();
  });


  return (
    <div className={styles.home}>
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
    </div>

  )
}

export default Home;